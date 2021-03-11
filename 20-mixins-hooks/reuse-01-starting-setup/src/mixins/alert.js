import UserAlert from '@/components/UserAlert.vue';

export default {
	components: {
		UserAlert
	},
	data() {
		return {
			alertIsVisible: false
		};
	},
	methods: {
		showAlert() {
			this.alertIsVisible = true;
		},
		hideAlert() {
			this.alertIsVisible = false;
		}
	}
};
