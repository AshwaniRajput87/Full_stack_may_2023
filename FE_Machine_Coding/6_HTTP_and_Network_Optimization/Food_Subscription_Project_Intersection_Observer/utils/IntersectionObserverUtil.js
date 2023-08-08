class IntersectionObserverUtil {
  
    constructor(cb, options) {
        this.cb = cb;
        this.observer = new IntersectionObserver(this.handleIntersection.bind(this), options)
    }

    handleIntersection(entries) {

        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                this.cb(entry.target);
                this.unobserve(entry.target);
            }
            
        });
    }

    observe(target) {
        if (target instanceof Element) {
            this.observer.observe(target);
        } else {
            console.error('Invalid target:', target);
        } 
    }

    unobserve(target) {
       if (target instanceof Element) {
            this.observer.unobserve(target)
        } else {
            console.error('Invalid target:', target);
        }
    }

    disconnect() {
        this.observer.disconnect();
    }
}

export default IntersectionObserverUtil;