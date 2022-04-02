import CompanyModel from './Company.ts';

type MachineModel = {
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

export default MachineModel;
