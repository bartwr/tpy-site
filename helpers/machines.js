import {getMachines} from './localStorage.js';

const fetchMachines = async () => {
  const theMachines = await getMachines();
  const machineObjects = theMachines.map(x => {
    return {
      id: x.sys.id,
      category: x.fields.category,
      company: {
        id: x.fields.company.sys.id,
        contactEmail: x.fields.company.fields.contactEmail,
        contactPhone: x.fields.company.fields.contactPhone,
        name: x.fields.company.fields.name,
        website: x.fields.company.fields.website,
      },
      description: x.fields.description,
      dimensions: x.fields.dimensions,
      materials: x.fields.materials,
      specstandard: x.fields.specstandard,
      name: x.fields.name,
      type: x.fields.type,
      image: "https://i.imgur.com/83Ovq2V.jpeg"
    }
  })
  return machineObjects;
}

export {
  fetchMachines
}
