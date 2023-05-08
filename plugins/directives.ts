interface Menu {
    id: number,
    el: HTMLElement,
};

let activeMenu: Menu | null = null;

export default defineNuxtPlugin(config => {
    config.vueApp.directive('no-pointer', {
        mounted: (el: HTMLElement) => el.oncontextmenu = () => false
    });

    config.vueApp.directive('menu', {
        mounted: (el: HTMLElement, binding) => {
            if(activeMenu){
                if(activeMenu.id !== binding.value.id)
                    activeMenu.el.dispatchEvent(new CustomEvent('menu:open'));
            }

            activeMenu = { id: binding.value.id, el };
            
            binding.value.eventHandler = function () {
                const event = new CustomEvent('menu:open');
                el.dispatchEvent(event);
            };

            window.addEventListener("click", binding.value.eventHandler);

            el.onclick = function(event) {
                event.stopImmediatePropagation();
            };
        },
        unmounted: (el: HTMLImageElement, binding) => {
            window.removeEventListener("click", binding.value.eventHandler);
            const event = new CustomEvent('menu:close');
            el.dispatchEvent(event);
        },
    });
});