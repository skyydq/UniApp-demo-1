<template name="navBar">
	<view>
		<!-- #ifdef APP-PLUS -->  
		<view class="status_bar">  
			<view class="top_view"></view>  
		</view>
		<!-- #endif -->  
	</view>
</template>

<script>
	export default {
		name: "navBar",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.status_bar {  
		height: var(--status-bar-height);  
		width: 100%;  
	}  
	.top_view {  
		height: var(--status-bar-height);  
		width: 100%;  
		position: fixed;  
		background-color: rgba(0,0,0,.4);  
		top: 0;  
		z-index: 999;
	}
</style>
