import { Firestore, collection, getDocs, addDoc, getFirestore, Query, query, QueryConstraint, doc, setDoc, getDoc, orderBy, startAt, limit, startAfter, DocumentSnapshot, QuerySnapshot } from "firebase/firestore";

export interface Pagination {
    snapshots: QuerySnapshot,
    next: Query | null,
};

export default class FirebaseProvider {
    private firestore!: Firestore;

    setUp() {
        this.firestore = getFirestore();
    }

    getUserRef() {
        return collection(this.firestore, "users");
    }

    // uid:/metadata/contacts/
    getContactRef(uid: string) {
        return collection(this.firestore, uid, "metadata", "contacts");
    }

    // uid:/metadata/contacts/
    async paginateContacts(uid: string, filter: Query | null = null): Promise<Pagination> {
        const snapshots = await getDocs(
            filter || query(
                this.getContactRef(uid),
                orderBy("timestamp"),
                limit(8),
            ),
        );

        return {
            snapshots,
            next: snapshots.docs.length > 0 ? query(
                this.getContactRef(uid),
                orderBy("timestamp"),
                limit(8),
                startAfter(snapshots.docs[snapshots.docs.length - 1])
            ) : null,
        };
    }

    // uid/metadata/contacts/
    // payload = { other: string, data: object }
    addContact(uid: string, other: string, data: Record<string, any>) {
        // set timestamp 
        
        return setDoc(doc(this.getContactRef(uid), other), data);
    }

    // uid:/metadata/contacts/other:/
    getContact(uid: string, other: string) {
        return getDoc(doc(this.getContactRef(uid), other));
    }

    // users?phoneNumber=string
    filterUsers(...filter: QueryConstraint[]) {
        return getDocs(query(this.getUserRef(), ...filter));
    }
}