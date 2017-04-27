// DirectPaymentRequest
import {Contribution} from './contribution.model';
import {User} from './user.model';
export class DPRequest {
    id: number;
    name: string;
    contributions: Contribution[];
    address: string;
    remark: string;
    inspector: User;
}
