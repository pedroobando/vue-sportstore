<template>
	<div class="container-fluid">
		<div class="row my-2" v-for="c in categories" :key="c">
			<button class="btn btn-block"	@click="setCurrentCategory(c)" 
				:class="c == currentCategory ? 'btn-primary' : 'btn-secondary'">
				{{ c }}
			</button>
		</div>
	</div>
</template>

<script>
	import { mapState, mapGetters, mapMutations} from "vuex";
	export default {
		computed: {
			...mapState(["currentCategory"]),
			...mapGetters(["categories"])
		},
		methods: {
			...mapMutations(["setCurrentCategory"])
		}
	}
</script>
