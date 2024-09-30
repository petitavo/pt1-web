export class Examiner{
    constructor({ id = 0, firstName = '', lastName = '', nationalProviderIdentifier= 0}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.nationalProviderIdentifier = nationalProviderIdentifier;
    }
}

