<template>
	<div class="modal_all" v-show="show">
		<div class="modal_content" v-bind:style="pStyle">
			<slot name="modal_main">我是内容</slot>
		</div>
	</div>
</template>
<script>
	export default {
		name:'cs_modal',
		data () {
			return {

			}
		},
		props:['pStyle','show']
	}
</script>

<style>
	.modal_all{
		position: fixed;
	    width: 100%;
	    z-index: 1000;
	    top: 0;
	    bottom: 0;
	    left: 0;
	    right: 0;
	    background: rgba(55, 55, 55, 0.6);
	    overflow: auto;
	}
	.modal_content{
		border-radius: 4px;
	    box-shadow: 0 0 10px #8a96ad;
	    margin: 0 auto;
	    background: white;
	    height: 200px;
	    width: 200px;
	    position: fixed;
	    bottom: 0;
	    left: 0;
	    right: 0;
	    top: 30%;
	}
</style>