const template = `
	<div
		class="page-wrapper"
		:style="styles.pageWrapStyle"
	>
		<slot></slot>
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
    template: template
});

export default PageWrap
