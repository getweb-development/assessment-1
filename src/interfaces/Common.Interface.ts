export class Device {
  _id: string;
  _rev: string;
  doctype: string;
  serialNumber: string;
  nextChecks: NextCheckValue[];
  type: string;
  assignedTo: AssignedValue;
  status: number;
  inventoryNumber: string;
  constructor(
    serialNumber = '',
    nextChecks: NextCheckValue[] = [],
    type = '',
    assignedTo = { user: '', userGroup: '', customer: '', type: '' },
    status = 1,
    inventoryNumber = ''
  ) {
    this._id = '';
    this._rev = '';
    this.doctype = 'device';
    this.nextChecks = nextChecks;
    this.type = type;
    this.assignedTo = assignedTo;
    this.status = status;
    this.serialNumber = serialNumber;
    this.inventoryNumber = inventoryNumber;
  }
}

export class NextCheckValue {
  checkDefinitionId: string;
  nextCheck: Date;
  constructor(checkDefinitionId: string, nextCheck: Date) {
    this.checkDefinitionId = checkDefinitionId;
    this.nextCheck = nextCheck;
  }
}

export class AssignedValue {
  user: string;
  userGroup: string;
  customer: string;
  type: string;
  constructor(user: string, userGroup: string, customer: string, type: string) {
    this.user = user;
    this.userGroup = userGroup;
    this.customer = customer;
    this.type = type;
  }
}
