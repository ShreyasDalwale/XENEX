new Vue({
    el: '#app',
    data: {
        hasOpenLoading: false,
        types: ['default', 'waves', 'corners', 'border', 'points', 'square', 'gradient', 'rectangle', 'circles', 'square-rotate', 'scale'],
        active1: false,
        active2: false,
        active3: false,
        input1: '',
        value: '',
        value2: '',
        active:0,
        uname:"Shreyas",
        ualias:"@insaneninja",
        // active:'home',
        loading: null
    },
    methods: {
        openLoading() {
            this.loading = this.$vs.loading({
                type: 'scale',
                text: 'Rendering Vue Components',
                opacity: 1,
                target: "#MI"
            });
            console.log(this.loading)
            setTimeout(() => {
                this.loading.close()
            }, 3000)
        },
        openNotification() {
            this.$vs.notification({
                position: 'top-right',
                title: 'Documentation Vuesax 4.0+',
                text: `These documents refer to the latest version of vuesax (4.0+),
            to see the documents of the previous versions you can do it here 👉 Vuesax3.x`
            })
        },
        resetLS() {
            localStorage.removeItem('isFirstTime')
        }
    },
    beforeMount() {
        this.loading = this.$vs.loading()
        this.uname = localStorage.getItem("xenexUName")
        this.ualias = localStorage.getItem("xenexUAlias")
        console.log(this.uname,this.ualias)
    },
    mounted() {
            this.loading.close()
    	$('.gridIso').isotope({
  // options
  itemSelector: '.grid-card',
  layoutMode: 'fitColumns'
});
        window.addEventListener('load', () => {
            // run after everything is in-place
        })
        Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => {
            img.onload = img.onerror = resolve;
            this.loading.close()

        }))).then(() => {
        });
        console.log(this.loading)
    }
})
console.log("SHREAS")