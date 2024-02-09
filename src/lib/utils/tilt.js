export default function tilt(node, overwriteSettings) {
    let transitionDuration = 0;
    let transitionId;

    const doTransition = () => {
        clearTimeout(transitionId);
        node.style.willChange = "transform";
        node.style.transition = `${transitionDuration}ms`;
        transitionId = setTimeout(() => node.style.transition = "0ms", transitionDuration);
    }

    function onMouseMove(event) {
        const settings = { scale: 1, limit: 30, duration: 250, ...overwriteSettings };
        const { width, height, left, top } = node.getBoundingClientRect();

        const rotateX = (((event.clientY - top) / height) * settings.limit) - (settings.limit / 2);
        const rotateY = (settings.limit / 2) - (((event.clientX - left) / width) * settings.limit);

        transitionDuration = settings.duration;
        node.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)
         scale3d(${settings.scale}, ${settings.scale}, ${settings.scale})`;
    }

    const onMouseLeave = () => {
        doTransition();
        node.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    }

    const onMouseEnter = () => {
        doTransition();
        node.style.willChange = "transform";
    }

    node.addEventListener("mousemove", onMouseMove);
    node.addEventListener("mouseleave", onMouseLeave);
    node.addEventListener("mouseenter", onMouseEnter);

    return {
        destroy() {
            node.removeEventListener("mousemove", onMouseMove);
            node.removeEventListener("mouseleave", onMouseLeave);
            node.removeEventListener("mouseenter", onMouseEnter);
        }
    }
}
