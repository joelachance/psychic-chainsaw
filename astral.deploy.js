/**
* All infrastructure definitions belong in this file.
* See examples of common deployments here: https://tryastral.com/api/javascript
*/
export default {
	async infra() {
		return new astral.App({
			entrypoint: './app',
		});
	},
};