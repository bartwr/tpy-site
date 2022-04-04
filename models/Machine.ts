import {CompanyModel} from './Company';

export type MachineModel = {
  id: string;
  name: string;
  category?: string;
  company?: CompanyModel;
  description?: string,
  dimensions?: string,
  materials?: string,
  specstandard?: string,
  type?: string,
  image?: string
}

export const MachineDefaultValues: MachineModel = {
  id: '',
  name: '',
  category: '',
  company: <CompanyModel>{
    id: '',
    name: '',
    contactEmail: '',
    contactPhone: '',
    website: ''
  },
  description: '',
  dimensions: '',
  materials: '',
  specstandard: '',
  type: '',
  image: ''
}
