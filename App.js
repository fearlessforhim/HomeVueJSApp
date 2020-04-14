const MyApp = Vue.component("MyApp", {
    data() {
	return {
	    count: 0,
	    styles: {
		pageWrapStyle: {
		    border: '1px solid gray'
		}
	    }
	}
    },
    template: `
<div
:style="styles.pageWrapStyle"
>
my app template {{count}}
</div>`,
    created() {
	this.increaseCount();
    },
    methods: {
	increaseCount(){
	    this.count = this.count + 1;
	    setTimeout(this.increaseCount, 1000);
	}
    }
});

export default MyApp
