import React, { useState } from 'react';
import axiosInstance from '../../axiosInstance.js';
import {
  CContainer,
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormInput,
  CFormSelect,
  CButton,
  CRow,
  CFormTextarea,
  CCol,
  CFormFeedback,
  CFormLabel
} from '@coreui/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImportExport } from '../ImportExportEntrepeneur/importExport.js'

const CreateContact = () => {
  const activitySectors = [
    { value: 'Sustainable Agriculture', label: 'Sustainable Agriculture' },
    { value: 'Cosmetics', label: 'Cosmetics' },
    { value: 'Recycling', label: 'Recycling' },
    { value: 'Green Tech', label: 'Green Tech' },
    { value: 'Food Industry', label: 'Food Industry' },
    { value: 'Creative and Cultural', label: 'Creative and Cultural' },
    { value: 'Sustainable Tourism', label: 'Sustainable Tourism' },
    { value: 'Consumption Optimization', label: 'Consumption Optimization' },
    { value: 'Renewable Energy', label: 'Renewable Energy' },
    { value: 'Water Resource Management', label: 'Water Resource Management' }
  ];

  const regions = [
    'Ariana', 'Beja', 'Ben Arous', 'Bizerte', 'Gabes', 'Gafsa',
    'Jendouba', 'Kairouan', 'Kasserine', 'Kebili', 'Kef', 'Mahdia',
    'Manouba', 'Medenine', 'Monastir', 'Nabeul', 'Sfax', 'Sidi Bouzid',
    'Siliana', 'Sousse', 'Tataouine', 'Tozeur', 'Tunis', 'Zaghouan'
  ];

  const initialContactData = {
    lastName: '',
    firstName: '',
    address: '',
    email: '',
    birthDate: '',
    region: '',
    gender: '',
    startupName: '',
    description: '',
    governorate: '',
    activitySector: '',
    cofounderCount: '',
    femaleCofounderCount: '',
    createdOrNot: '',
    legalForm: '',
    jobsCreated: '',
    projectCost: ''
  };

  const [contactData, setContactData] = useState(initialContactData);
  const [validated, setValidated] = useState(false);

  const notifyError = (field) => {
    toast.error(`The ${field} field is required.`, {
      autoClose: 3000,
    });
  };

  const notifySuccess = () => {
    toast.success("Contact created successfully", {
      autoClose: 3000,
    });
  };

  const validateCofounders = () => {
    const { cofounderCount, femaleCofounderCount } = contactData;
    if (Number(femaleCofounderCount) > Number(cofounderCount)) {
      return false;
    }
    return true;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    }

    setValidated(true);

    for (const field in contactData) {
      if (contactData[field] === "") {
        notifyError(field);
        return;
      }
    }

    if (!validateCofounders()) {
      toast.error("Number of female co-founders cannot be greater than the total number of co-founders", {
        autoClose: 3000,
      });
      return;
    }

    try {
      await axiosInstance.post('/createntrepreneurs', contactData);
      notifySuccess();
      setContactData(initialContactData);
    } catch (error) {
      console.error(error);
      toast.error('Failed to create contact', {
        autoClose: 3000,
      });
    }
  }

  return (
    <CContainer>
      <ImportExport />
      <ToastContainer />
      <CCard>
        <CCardHeader className="bg-dark text-light">Create New Contact</CCardHeader>
        <CCardBody>
          <CForm
            className="row g-3 needs-validation"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <CRow className='mb-0'>
<<<<<<< HEAD
              {/* Information about the entrepreneur */}
              <CCol md="6" className="mb-4">
                <fieldset className="border border-success p-4 bg-light rounded mt-4 mb-0" style={{ marginBottom: "20px" }}>
                  <legend className="w-auto">Information about the entrepreneur</legend>
                  <CRow>
                    <CCol md="6">
                      {/* Input fields for entrepreneur information */}
                      <CFormLabel className="mt-2">Last Name</CFormLabel>
                      <CFormInput
                        type="text"
                        name="lastName"
                        value={contactData.lastName}
                        onChange={handleInputChange}
                        valid={contactData.lastName !== ''}
                        placeholder="Last Name"
                        required
                        feedbackInvalid="Last Name is required."
                      />
                    </CCol>
                    <CCol md="6">
                      <CFormLabel className="mt-2">First Name</CFormLabel>
                      <CFormInput
                        type="text"
                        name="firstName"
                        value={contactData.firstName}
                        onChange={handleInputChange}
                        valid={contactData.firstName !== ''}
                        placeholder="First Name"
                        required
                        feedbackInvalid="First Name is required."
                      />
                    </CCol>
                    <CCol md='12'>
                      <CFormLabel className="mt-2">Address</CFormLabel>
                      <CFormInput
                        type="text"
                        name="address"
                        value={contactData.address}
                        onChange={handleInputChange}
                        valid={contactData.address !== ''}
                        placeholder="Address"
                        required
                        feedbackInvalid="Address is required."
                      />
                    </CCol>
                    <CCol md='12'>
                      <CFormLabel className="mt-2">Email</CFormLabel>
                      <CFormInput
                        type="email"
                        name="email"
                        value={contactData.email}
                        onChange={handleInputChange}
                        valid={contactData.email !== ''}
                        placeholder="Email"
                        required
                        feedbackInvalid="Email is required."
                      />
                    </CCol>
                    <CCol md='12'>
                      <CFormLabel className="mt-2">Birth Date</CFormLabel>
                      <CFormInput
                        type="date"
                        name="birthDate"
                        value={contactData.birthDate}
                        onChange={handleInputChange}
                        valid={contactData.birthDate !== ''}
                        placeholder="Birth Date"
                        required
                        feedbackInvalid="Birth Date is required."
                      />
                    </CCol>
                    <CCol md='6'>
                      <CFormLabel className="mt-2">Region</CFormLabel>
                      <CFormSelect
                        name="region"
                        value={contactData.region}
                        onChange={handleInputChange}
                        valid={contactData.region !== ''}
                        required
                        feedbackInvalid="Region is required."
                      >
                        <option value="">Select Region</option>
                        {regions.map((region) => (
                          <option key={region} value={region}>{region}</option>
                        ))}
                      </CFormSelect>
                    </CCol>
                    <CCol md='6'>
                      <CFormLabel className="mt-2">Gender</CFormLabel>
                      <CFormSelect
                        name="gender"
                        value={contactData.gender}
                        onChange={handleInputChange}
                        valid={contactData.gender !== ''}
                        required
                        feedbackInvalid="Gender is required."
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </CFormSelect>
                    </CCol>
                    <CCol md='12'>
                      <CFormLabel className="mt-2">Upload Picture</CFormLabel>
                      <CFormInput type="file" accept="image/*" name='logo' />
                    </CCol>
                    <CCol>
                      <CFormLabel className="mt-2">Description</CFormLabel>
                      <CFormTextarea
                        name='description'
                        rows="1.5"
                        placeholder='Description'
                      ></CFormTextarea>
                    </CCol>
                  </CRow>
                </fieldset>
              </CCol>
=======
  {/* Information about the entrepreneur */}
  <CCol md="6" className="mb-4">
    <fieldset className="border border-success p-4 bg-light rounded mt-4 mb-0" style={{ marginBottom: "20px" }}>
      <legend className="w-auto">Information sur l'entrepreneur</legend>
      <CRow>
        <CCol md="6">
          {/* Input fields for entrepreneur information */}
          <CFormLabel className="mt-2">Nom</CFormLabel>
          <CFormInput
            type="text"
            name="nom"
            value={contactData.nom}
            onChange={handleInputChange}
            valid={contactData.prenom!==''}
            placeholder="Nom"
            required
            feedbackInvalid="Le nom est requis."
          />
          </CCol>
          <CCol md="6">
          <CFormLabel className="mt-2">Prénom</CFormLabel>
          <CFormInput
            type="text"
            name="prenom"
            value={contactData.prenom}
            onChange={handleInputChange}
            valid={contactData.prenom!==''}
            placeholder="Prénom"
            required
            feedbackInvalid="Le prénom est requis."
          />
          </CCol>
          <CCol md='12'>
          <CFormLabel className="mt-2">Adresse</CFormLabel>
          <CFormInput
            type="text"
            name="adresse"
            value={contactData.adresse}
            onChange={handleInputChange}
            valid={contactData.adresse!==''}
            placeholder="Adresse"
            required
            feedbackInvalid="L'adresse est requise."
          />
          </CCol>
          <CCol  md='12'>
          <CFormLabel className="mt-2">Email</CFormLabel>
          <CFormInput
            type="email"
            name="email"
            value={contactData.email}
            onChange={handleInputChange}
            valid={contactData.email!==''}
            placeholder="Email"
            required
            feedbackInvalid="L'email est requis."
          />
          </CCol>
          <CCol md='12'>
          <CFormLabel className="mt-2">Date de Naissance</CFormLabel>
          <CFormInput
            type="date"
            name="dateDeNaissance"
            value={contactData.dateDeNaissance}
            onChange={handleInputChange}
            valid={contactData.dateDeNaissance!==''}
            placeholder="Date de Naissance"
            required
            feedbackInvalid="La date de naissance est requise."
          />
          </CCol>
          <CCol md='6'>
          <CFormLabel className="mt-2">Région</CFormLabel>
          <CFormSelect
            name="region"
            value={contactData.region}
            onChange={handleInputChange}
            valid={contactData.region in regions}
            required
            feedbackInvalid="La région est requise."
          >
            <option value="">Select Region</option>
            {regions.map((region) => (
              <option key={region} value={region}>{region}</option>
            ))}
          </CFormSelect>
          </CCol>
          <CCol md='6'>
          <CFormLabel className="mt-2">Gender</CFormLabel>
          <CFormSelect
            name="gender"
            value={contactData.gender}
            onChange={handleInputChange}
            valid={contactData.gender!==''}
            required
            feedbackInvalid="Gender is required."
          >
            <option value="">Sélectionnez le genre</option>
            <option value="homme">homme</option>
            <option value="femme">femme</option>
          </CFormSelect>
          </CCol>
          <CCol md='12'>
          <CFormLabel className="mt-2">Upload Picture</CFormLabel>
            <CFormInput type="file" accept="image/*"  name='logo'  />
          </CCol>
          <CCol>
            <CFormLabel className="mt-2">Description</CFormLabel>
            <CFormTextarea 
            name='Description'
            rows="1.5"
            placeholder='description'
            ></CFormTextarea>
          </CCol>
        </CRow>
    </fieldset>
  </CCol>
>>>>>>> origin/main

              {/* Startup Information */}
              <CCol md="6" className="mb-4">
                <fieldset className="border border-success p-4 bg-light rounded mt-4 mb-0" style={{ marginBottom: "20px" }}>
                  <legend className="w-auto">Startup Information</legend>
                  <div className="row">
                    <CCol md="12">
                      {/* Input fields for startup information */}
                      <CFormLabel className="mt-2">Startup Name</CFormLabel>
                      <CFormInput
                        type="text"
                        name="startupName"
                        value={contactData.startupName}
                        onChange={handleInputChange}
                        valid={contactData.startupName !== ''}
                        placeholder="Startup Name"
                        required
                        feedbackInvalid="Startup Name is required."
                      />
                    </CCol>
                    <CCol md="12">
                      <CFormLabel className="mt-2">Governorate</CFormLabel>
                      <CFormInput
                        type="text"
                        name="governorate"
                        value={contactData.governorate}
                        onChange={handleInputChange}
                        valid={contactData.governorate !== ''}
                        placeholder="Governorate"
                        required
                        feedbackInvalid="Governorate is required."
                      />
                    </CCol>
                    <CCol md="12">
                      <CFormLabel className="mt-2">Activity Sector</CFormLabel>
                      <CFormSelect
                        name="activitySector"
                        value={contactData.activitySector}
                        onChange={handleInputChange}
                        valid={contactData.activitySector !== ''}
                        required
                        feedbackInvalid="Activity Sector is required."
                      >
                        <option value="">Select Activity Sector</option>
                        {activitySectors.map((sector) => (
                          <option key={sector.value} value={sector.value}>{sector.label}</option>
                        ))}
                      </CFormSelect>
                    </CCol>
                    <CCol md="6">
                      <CFormLabel className="mt-2">Number of Co-founders</CFormLabel>
                      <CFormInput
                        type="number"
                        name="cofounderCount"
                        value={contactData.cofounderCount}
                        onChange={handleInputChange}
                        valid={contactData.cofounderCount !== ''}
                        placeholder="Number of Co-founders"
                        required
                        feedbackInvalid="Number of Co-founders is required."
                      />
                    </CCol>
                    <CCol md="6">
                      <CFormLabel className="mt-2">Number of Female Co-founders</CFormLabel>
                      <CFormInput
                        type="number"
                        name="femaleCofounderCount"
                        value={contactData.femaleCofounderCount}
                        onChange={handleInputChange}
                        valid={contactData.femaleCofounderCount !== ''}
                        placeholder="Number of Female Co-founders"
                        required
                        feedbackInvalid="Number of Female Co-founders is required."
                      />
                    </CCol>
                    <CCol md="12">
                      <CFormLabel className="mt-2">Created or Not?</CFormLabel>
                      <CFormInput
                        type="text"
                        name="createdOrNot"
                        value={contactData.createdOrNot}
                        onChange={handleInputChange}
                        valid={contactData.createdOrNot !== ''}
                        placeholder="Created or Not?"
                        required
                        feedbackInvalid="This field is required."
                      />
                    </CCol>
                    <CCol md="12">
                      <CFormLabel className="mt-2">Legal Form</CFormLabel>
                      <CFormInput
                        type="text"
                        name="legalForm"
                        value={contactData.legalForm}
                        onChange={handleInputChange}
                        valid={contactData.legalForm !== ''}
                        placeholder="Legal Form"
                        required
                        feedbackInvalid="Legal Form is required."
                      />
                    </CCol>
                    <CCol md="12">
                      <CFormLabel className="mt-2">Number of Jobs Created</CFormLabel>
                      <CFormInput
                        type="number"
                        name="jobsCreated"
                        value={contactData.jobsCreated}
                        onChange={handleInputChange}
                        valid={contactData.jobsCreated !== ''}
                        placeholder="Number of Jobs Created"
                        required
                        feedbackInvalid="Number of Jobs Created is required."
                      />
                    </CCol>
                    <CCol md="12">
                      <CFormLabel className="mt-2">Project Cost</CFormLabel>
                      <CFormInput
                        type="number"
                        name="projectCost"
                        value={contactData.projectCost}
                        onChange={handleInputChange}
                        valid={contactData.projectCost !== ''}
                        placeholder="Project Cost"
                        required
                        feedbackInvalid="Project Cost is required."
                      />
                    </CCol>
                  </div>
                </fieldset>
              </CCol>
            </CRow>

<<<<<<< HEAD
            <CRow>
              <CCol className="text-center mt-4">
                <CButton type="submit" color="success">Create Contact</CButton>
              </CCol>
            </CRow>
          </CForm>
        </CCardBody>
      </CCard>
    </CContainer>
  );
};
=======
            valid={contactData.description!==''}
            placeholder="Description"
            rows="1.5"
            required
            feedbackInvalid="Description is required."
          />
          <CRow>
            <CCol md="6">
              <CFormLabel className="mt-2">Gouvernorat</CFormLabel>
              <CFormSelect
                name="gouvernorat"
                value={contactData.gouvernorat}
                onChange={handleInputChange}
                valid={contactData.gouvernorat!==''}
                required
                feedbackInvalid="Gouvernorat is required."
              >
                <option value="">Select Gouvernorat</option>
                {regions.map((region) => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </CFormSelect>
            </CCol>
            <CCol md="6">
              <CFormLabel className="mt-2">Secteur d'Activités</CFormLabel>
              <CFormSelect
                name="secteurActivites"
                value={contactData.secteurActivites}
                onChange={handleInputChange}
                valid={contactData.secteurActivites in secteursActivites}
                required
                feedbackInvalid="Secteur d'activités is required."
              >
                <option value="">Select Secteur d'activités</option>
                {secteursActivites.map((secteur) => (
                  <option key={secteur.value} value={secteur.value}>{secteur.label}</option>
                ))}
              </CFormSelect>
            </CCol>
          </CRow>
          <CRow>
            <CCol md="6">
              <CFormLabel className="mt-2">Nombre Cofondateurs</CFormLabel>
              <CFormInput
                type="number"
                name="nombreCofondateurs"
                value={contactData.nombreCofondateurs}
                onChange={handleInputChange}
                valid={contactData.nombreCofondateurs>0}
                placeholder="Nombre Cofondateurs"
                required
                feedbackInvalid="Nombre Cofondateurs is required."
              />
            </CCol>
            <CCol md="6">
              <CFormLabel className="mt-2">Nombre Cofondateurs Femmes</CFormLabel>
              <CFormInput
                type="number"
                name="nombreCofondateursFemmes"
                value={contactData.nombreCofondateursFemmes}
                valid={contactData.nombreCofondateursFemmes>0 && contactData.nombreCofondateurs>=contactData.nombreCofondateursFemmes}
                onChange={handleInputChange}
                placeholder="Nombre Cofondateurs Femmes"
                required
                feedbackInvalid="Nombre Cofondateurs Femmes is required."
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol md="6">
          <CFormLabel className="mt-2">Creee ou non</CFormLabel>
          <CFormSelect
            name="creeeOuNon"
            value={contactData.creeeOuNon}
            onChange={handleInputChange}
            valid={contactData.creeeOuNon!==''}
            required
            feedbackInvalid="Creee ou non is required."
          >
            <option value="">Creee ou non</option>
            <option value="oui">Creee</option>
            <option value="non">Non</option>
          </CFormSelect>
          </CCol>
          <CCol md="6">
          <CFormLabel className="mt-2">Forme Juridique</CFormLabel>
          <CFormSelect
            name="formeJuridique"
            value={contactData.formeJuridique}
            onChange={handleInputChange}
            valid={contactData.formeJuridique!==''}
            required
            feedbackInvalid="Forme Juridique is required."
          >
            <option value="">Forme juridique</option>
            <option value="SAS">SAS</option>
            <option value="SARL">SARL</option>
            <option value="SUARL">SUARL</option>
            <option value="SA">SA</option>
            <option value="SCA">SCA</option>
          </CFormSelect>
          </CCol>
          </CRow>
          <CFormLabel className="mt-2">Nombre Emplois Crees</CFormLabel>
          <CFormInput
            type="number"
            name="nombreEmploisCrees"
            value={contactData.nombreEmploisCrees}            onChange={handleInputChange}
            placeholder="Nombre Emplois Crees"
            valid={contactData.nombreEmploisCrees>0}
            required
            feedbackInvalid="Nombre Emplois Crees is required."
          />
          <CFormLabel className="mt-2">Cout Projet</CFormLabel>
          <CFormInput
            type="number"
            name="coutProjet"
            value={contactData.coutProjet}
            onChange={handleInputChange}
            valid={contactData.coutProjet>0}
            placeholder="Cout Projet"
            required
            feedbackInvalid="Cout Projet is required."
          />
        </CCol>
      </div>
    </fieldset>
  </CCol>

  <CCol xs="12" className="d-flex justify-content-end mt-0 mb-4">
    <CButton color="primary" type="submit" className="btn-block">Submit</CButton>
  </CCol>
</CRow>

        </CForm>
      </CCardBody>
    </CCard>
  </CContainer>
);
}
>>>>>>> origin/main

export default CreateContact;
