// DirectPaymentRequest
import {Contribution} from './contribution.model';
export class DPRequest {
    id: number;
    name: string;
    contributions: Contribution[];
}
