import { action, observable } from 'mobx';

class ApplicationStore {
	@observable
	applicationName = 'React Application';
	@observable
	version = '1.0.0'

	@action
	updateObservable(Observablename) {
		this['applicationName'] = Observablename;
	}
}

export default new ApplicationStore()