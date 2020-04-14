const template = `
	<div
		class="page-wrapper"
		:style="styles.pageWrapStyle"
	>
		my app template {{count}}
	</div>
`;

const PageWrap = Vue.component("PageWrap", {
    data() {
        return {
            count: 0,
            styles: {
                pageWrapStyle: {
                    padding: '10px'
                }
            }
        }
    },
    template: template,
    created() {
        this.increaseCount();
    },
    methods: {
        increaseCount() {
            this.count = this.count + 1;
            setTimeout(this.increaseCount, 1000);
        }
    }
});

export default PageWrap
