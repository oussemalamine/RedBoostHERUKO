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
  CModal,
  CFormLabel,
  CFormSwitch,
  CModalBody,
  CModalFooter,
  CFormCheck
} from '@coreui/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImportExport } from '../ImportExportEntrepeneur/importExport.js'

const CreateContact = () => {


  const regions = [
    'Ariana', 'Beja', 'Ben Arous', 'Bizerte', 'Gabes', 'Gafsa',
    'Jendouba', 'Kairouan', 'Kasserine', 'Kebili', 'Kef', 'Mahdia',
    'Manouba', 'Medenine', 'Monastir', 'Nabeul', 'Sfax', 'Sidi Bouzid',
    'Siliana', 'Sousse', 'Tataouine', 'Tozeur', 'Tunis', 'Zaghouan'
  ];
  const activitySectors = [
    'Tourisme durable', 'Agriculture', 'Recyclage', 'Agroalimentaire', 'Cosmétique', 'Energies renouvelables'
  ];
  const marcheList = [
    'locale', 'national', 'international'
  ];

  const sourceFinList = [
    'Auto Financement', 'Crédit', 'Subvention'
  ];
  const handlePhaseProInputChange = (e) => {
    const { name, options } = e.target;

  // Create an array of selected values
  const selectedValues = Array.from(options)
    .filter(option => option.selected)
    .map(option => option.value);

  // Update the state with selected values
  setContactData((prevData) => ({
    ...prevData,
    [name]: selectedValues, // Save selected options as an array
  }))
  };
  const handleMarcheInputChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setContactData({
        ...contactData,
        marche: [...contactData.marche, value] // Add selected value to marche array
      });
    } else {
      setContactData({
        ...contactData,
        marche: contactData.marche.filter((marche) => marche !== value) // Remove unchecked value from marche array
      });
    }
  };
  const handleSourceInputChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setContactData({
        ...contactData,
        marche: [...contactData.source, value] // Add selected value to marche array
      });
    } else {
      setContactData({
        ...contactData,
        marche: contactData.source.filter((source) => source !== value) // Remove unchecked value from marche array
      });
    }
  };


  const initialContactData = {
    nom: '', // Last Name
    prenom: '', // First Name
    genre: '', // Gender
    mobile: '', // Mobile Number
    email: '', // Email
    dateDeNaissance: '', // Date of Birth
    diplomeFormation: '', // Diploma/Formation
    gouvernorat: '', // Governorate
    delegation: '', // Delegation
    blacklisted: false, // Blacklisted
    votreRole: '', // Your Role
    nomDuProjet: '', // Project Name
    creeOuPas: 'false', // Created or Not
    descriptionActivite: '', // Activity Description
    secteurActivite: '', // Activity Sector
    nombreEmployes: '', // Number of Employees
    lieuImplantation: '', // Location
    marche: [], // Market (Array of Strings)
    phaseDeProjet: '', // Project Phase
    personneCible: '', // Target Audience
    sourceDeFinancement: '', // Source of Funding
    formeJuridique: '', // Legal Form
    dejaBeneficiaireProAcc: false, // Already Beneficiary
    startupType: 'false',
    progAccompagnement: '', // Support Program
    typeDeBenefice: [], // Type of Benefit (Array of Strings)
    besoinAppui: [], // Support Needs (Array of Strings)
    typeProgAccSuivi: [], // Follow-up Support Program Type (Array of Strings)
    typeProgFormationSuivi: [] // Follow-up Training Program Type (Array of Strings)
  };
  const [contactData, setContactData] = useState(initialContactData);
  const [validated, setValidated] = useState(false);

  const [tempBlacklisted, setTempBlacklisted] = useState(contactData.blacklisted); // Temporary state
  const [showModal, setShowModal] = useState(false);

  const handleSwitchChange = () => {
    setTempBlacklisted(!contactData.blacklisted); // Toggle temporary state
    setShowModal(true); // Show confirmation modal
  };

  const confirmChange = () => {
    setContactData({ ...contactData, blacklisted: tempBlacklisted }); // Update the actual state
    setShowModal(false); // Close the modal
  };

  const cancelChange = () => {
    setTempBlacklisted(contactData.blacklisted); // Revert the change
    setShowModal(false); // Close the modal
  };




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

  const handleInputChange = (e) => {
    const { name, value, type, checked, options } = e.target;

    // Handling for checkboxes
    if (type === 'checkbox') {
      setContactData({
        ...contactData,
        [name]: checked,  // Store boolean value for checkbox
      });
    }
    // Handling for multiple select dropdowns
    else if (options) {
      const selectedValues = Array.from(options)
        .filter(option => option.selected)
        .map(option => option.value);

      setContactData({
        ...contactData,
        [name]: selectedValues,  // Store array of selected options
      });
    }
    // Default handling for other input types (text, select, etc.)
    else {
      setContactData({
        ...contactData,
        [name]: value,
      });
    }
  };
  const handleSelectChange = (e) => {
    const { name, options } = e.target;
    const values = Array.from(options)
      .filter(option => option.selected)
      .map(option => option.value);

    setcontactData({
      ...formData,
      [name]: values,
    });
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
            {/* Information about the entrepreneur */}
            <CCol md="6" className="mb-4">
              <fieldset className="border border-success p-4 bg-light rounded mt-4 mb-0" style={{ marginBottom: "20px" }}>
                <legend className="w-auto">Informations sur l'entrepreneur</legend>
                <CRow>
                  <CCol md="6">
                    {/* Input fields for entrepreneur information */}
                    <CFormLabel className="mt-2">Nom </CFormLabel>
                    <CFormInput
                      type="text"
                      name="nom"
                      value={contactData.nom}
                      onChange={handleInputChange}
                      valid={contactData.nom !== ''}
                      placeholder="Nom"
                      required
                      feedbackInvalid="Le nom est requis."
                    />
                  </CCol>
                  <CCol md="6">
                    <CFormLabel className="mt-2">Prénom </CFormLabel>
                    <CFormInput
                      type="text"
                      name="prenom"
                      value={contactData.prenom}
                      onChange={handleInputChange}
                      valid={contactData.prenom !== ''}
                      placeholder="Prénom "
                      required
                      feedbackInvalid="Prénom est requis."
                    />
                  </CCol>
                  <CCol md='6'>
                    <CFormLabel className="mt-2">Genre </CFormLabel>
                    <CFormSelect
                      name="genre"
                      value={contactData.genre}
                      onChange={handleInputChange}
                      valid={contactData.genre !== ''}
                      required
                      feedbackInvalid="Genre est requis."
                    >
                      <option value="">Choisir le Genre</option>
                      <option value="homme">Homme</option>
                      <option value="femme">Femme</option>
                    </CFormSelect>
                  </CCol>
                  <CCol md='12'>
                    <CFormLabel className="mt-2">Mobile </CFormLabel>
                    <CFormInput
                      name="mobile"
                      value={contactData.mobile}
                      onChange={handleInputChange}
                      valid={contactData.mobile.length >= 8}
                      feedbackInvalid="Mobile est requis."
                      required
                    />
                  </CCol>
                  <CCol md='12'>
                    <CFormLabel className="mt-2">Email </CFormLabel>
                    <CFormInput
                      type="email"
                      name="email"
                      value={contactData.email}
                      onChange={handleInputChange}
                      valid={contactData.email !== ''}
                      placeholder="Email "
                      required
                      feedbackInvalid="Email est requis."
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    />
                  </CCol>
                  <CCol md='12'>
                    <CFormLabel className="mt-2">Date de naissance</CFormLabel>
                    <CFormInput
                      type='date'
                      name="dateDeNaissance"
                      value={contactData.dateDeNaissance}
                      valid={contactData.dateDeNaissance !== ''}
                      onChange={handleInputChange}
                      feedbackInvalid="Date de naissance est requis."
                    />
                  </CCol>
                  <CCol md='6'>
                    <CFormLabel className="mt-2">Diplôme / Formation </CFormLabel>
                    <CFormSelect
                      name="diplomeFormation"
                      value={contactData.diplomeFormation}
                      onChange={handleInputChange}
                      placeholder="Diplôme / Formation"
                      valid={contactData.diplomeFormation !== ''}
                      feedbackInvalid="diplome / Formation est requis."
                    >
                      <option value="">Sélectionner le diplôme / la formation </option>
                      <option value="secondaire">Éducation Secondaire</option>
                      <option value="universitaire">Éducation Post-Secundaire</option>
                      <option value="formationProfessionnelle">Licence</option>
                      <option value="master">Master</option>
                      <option value="Doctorat">Doctorat (PhD)</option>
                      <option value="Formation Professionnelle">Formation Professionnelle</option>
                    </CFormSelect>
                  </CCol>
                  <CCol md='6'>
                    <CFormLabel className="mt-2">Gouvernorat</CFormLabel>
                    <CFormSelect
                      name="gouvernorat"
                      value={contactData.gouvernorat}
                      onChange={handleInputChange}
                      placeholder="Gouvernorat"

                    >
                      <option value="">Sélectionner Gouvernorat</option>
                      {regions.map((region) => (
                        <option key={region} value={region}>{region}</option>
                      ))}
                    </CFormSelect>
                  </CCol>
                  <CCol md='12'>
                    <CFormLabel className="mt-2">Delegation</CFormLabel>
                    <CFormInput
                      name="delegation"
                      value={contactData.delegation}
                      onChange={handleInputChange}
                      placeholder="Delegation "
                    />
                  </CCol>
                  <CCol md='12'>
                    <CFormLabel className="mt-2">Blacklisted</CFormLabel>
                    <CFormSwitch
                  size="xl"
                  label="Blacklisted"
                  id="formSwitchCheckDefaultXL"
                  name="blacklisted"
                  checked={tempBlacklisted}
                  onChange={handleSwitchChange}
                />
                <CModal visible={showModal} onClose={cancelChange}>
                  <CModalBody>
                    Are you sure you want to change the blacklist status?
                  </CModalBody>
                  <CModalFooter>
                    <CButton color="secondary" onClick={cancelChange}>Cancel</CButton>
                    <CButton color="primary" onClick={confirmChange}>Confirm</CButton>
                  </CModalFooter>
                </CModal>

                </CCol>
                  <CCol md='12'>
                    <CFormLabel className="mt-2">Votre Role au sein de l'entreprise </CFormLabel>
                    <CFormTextarea
                      name='votreRole'
                      rows="1"
                      value={contactData.votreRole}
                      onChange={handleInputChange}
                      placeholder='Votre Role au sein de lentreprise '
                    ></CFormTextarea>
                  </CCol>

                  <CCol md='12'>
                    <CFormLabel className="mt-2">Personne Cible</CFormLabel>
                    <CFormTextarea
                      name='personneCible'
                      rows="1"
                      value={contactData.personneCible}
                      onChange={handleInputChange}
                      placeholder='Quelles sont les personnes Cible de votre projets ?  '
                    ></CFormTextarea>
                  </CCol>
                </CRow>
              </fieldset>
            </CCol>

            {/* Startup Information */}
            <CCol md="6" className="mb-4">
              <fieldset className="border border-success p-4 bg-light rounded mt-4 mb-0" style={{ marginBottom: "20px" }}>
                <legend className="w-auto">Informations sur le projet/startup</legend>
              <CRow>
              <CCol md="12">
                {/* Input fields for startup information */}
                <CCol md="12">
                  <CFormLabel className="mt-2">Projet / Startup Innovante</CFormLabel>
                  <CFormSelect
                    name="startupType"
                    value={contactData.startupType}
                    onChange={handleInputChange}
                    placeholder="Vous êtes Projet / startup"
                  >
                  <option value="false">Entreprise</option>
                  <option value="true">Startup Technologique</option>
                  </CFormSelect>
                </CCol>

                {/* Conditional rendering based on startupType value */}
                {contactData.startupType === 'false' && (
                  <>
                    <CCol md="12">
                      <CFormLabel className="mt-2">Cree ou pas</CFormLabel>
                      <CFormSelect
                        name="creeOuPas"
                        value={contactData.creeOuPas}
                        onChange={handleInputChange}
                        placeholder="Entreprise cree Ou Pas"
                      >
                        <option value="">Cree ou pas</option>
                        <option value="true">Oui</option>
                        <option value="false">Non</option>
                      </CFormSelect>
                    </CCol>
                  </>
                )}
              </CCol>



                <CCol md="12">
                  <CFormLabel className="mt-2">Description de l'activité</CFormLabel>
                  <CFormInput
                    type="text"
                    name="descriptionActivite"
                    value={contactData.descriptionActivite}
                    onChange={handleInputChange}
                    placeholder="Description / Activité principale"
                    />
                </CCol>
                <CCol md="12">
                                <CFormLabel className="mt-2">Secteur d'Activité</CFormLabel>
                                <CFormSelect
                                  name="secteurActivite"
                                  value={contactData.secteurActivite}
                                  onChange={handleInputChange}
                                >
                                  <option value="">Sélectionner un secteur d'activité</option>
                                  {activitySectors.map((sector) => (
                                    <option key={sector} value={sector}>{sector}</option>
                                  ))}
                                </CFormSelect>
                </CCol>

                {/* Additional fields */}
                <CCol md="12">
                                <CFormLabel className="mt-2">Nombre d'employés</CFormLabel>
                                <CFormInput
                                  type="number"
                                  name="nombreEmployes"
                                  value={contactData.nombreEmployes}
                                  onChange={handleInputChange}
                                  placeholder="Nombre d'employés"
                                />
                </CCol>
                <CCol md="12">
                                <CFormLabel className="mt-2">Lieu d'implantation</CFormLabel>
                                <CFormInput
                                  type="text"
                                  name="lieuImplantation"
                                  value={contactData.lieuImplantation}
                                  onChange={handleInputChange}
                                  placeholder="Lieu d'implantation"
                                />
                </CCol>
                <CCol md="12">
                                <CFormLabel className="mt-2">Marché</CFormLabel>
                                  {marcheList.map((marche) => (
                                    <CFormCheck
                                      key={marche}
                                      type="checkbox"
                                      name="marche"
                                      value={marche}
                                      label={marche}
                                      checked={contactData.marche.includes(marche)}
                                      onChange={handleMarcheInputChange}
                                    />
                                  ))}
                </CCol>
                <CCol md="12">
                                <CFormLabel className="mt-2">Phase de projet</CFormLabel>
                                <CFormSelect
                                  name="phaseDeProjet"
                                  value={contactData.phaseDeProjet}
                                  onChange={handlePhaseProInputChange}
                                >
                                  <option value="">Sélectionner la phase de projet</option>
                                  <option value="idee">Idée</option>
                                  <option value="prototype">Prototype</option>
                                  <option value="lancement">Lancement</option>
                                  <option value="croissance">Croissance</option>
                                </CFormSelect>
                </CCol>
              </CRow>
                </fieldset>
            </CCol>
            </CRow>

            <CRow className='mb-0'>
            <CCol md="12" className="mb-4">
            <fieldset className="border border-success p-4 bg-light rounded mt-4 mb-0" style={{ marginBottom: "20px" }}>
            <legend className="w-auto">Informations sur l'entrepreneur</legend>

            {/* sourceDeFinancement */}
            <CCol md='12'>
            <CFormLabel className="mt-2"></CFormLabel>
            <CFormSelect
                    name="sourceDeFinancement"
                    value={contactData.sourceDeFinancement}
                    onChange={handleInputChange}
                  >
                    <option value="">Sélectionner</option>
                    <option value="Auto financement">Auto financement</option>
                    <option value="Crédit">Crédit</option>
                    <option value="Subvention">Subvention</option>
            </CFormSelect>
            </CCol>
            <CCol md="12">
              <CFormLabel className="mt-2">Source de Financement</CFormLabel>
              {sourceFinList.map((source) => (
                  <CFormCheck
                    key={source}
                    type="checkbox"
                    name="marche"
                    value={source}
                    label={source}
                    checked={contactData.sourceDeFinancement.includes(source)}
                    onChange={handleSourceInputChange}
                    />
                    ))}
                </CCol>

            {/* formeJuridique */}
            <CCol md='12'>
            <CFormLabel className="mt-2">Forme Juridique</CFormLabel>
            <CFormInput
             type="text"
                    name="formeJuridique"
                    value={contactData.formeJuridique}
             onChange={handleInputChange}
            />
            </CCol>

            {/* dejaBeneficiaireProAcc */}
            <CCol md='12'>
            <CFormLabel className="mt-2">Déjà Bénéficiaire Programme Accompagnement</CFormLabel>
            <br></br>
             <CFormCheck
              type="checkbox"
                    name="dejaBeneficiaireProAcc"
                    checked={contactData.dejaBeneficiaireProAcc}
              onChange={handleInputChange}
              />
            </CCol>
            <CCol md='12'>
            <CFormLabel className="mt-2">Programme d'Accompagnement</CFormLabel>
            {/* progAccompagnement */}
              <CFormInput
                type="text"
                      name="progAccompagnement"
                      value={contactData.progAccompagnement}
                onChange={handleInputChange}
                />
            </CCol>

            {/* typeDeBenefice */}
            <CCol md='12'>
            <CFormLabel className="mt-2">Type de Bénéfice</CFormLabel>
              <CFormSelect
                    name="typeDeBenefice"
                    multiple
                    value={contactData.typeDeBenefice}
                    onChange={handleSelectChange}
                  >
                    <option value="Formation">Formation</option>
                    <option value="Accompagnement">Accompagnement</option>
                    <option value="Coaching">Coaching</option>
                    <option value="Prêt d’honneur">Prêt d’honneur</option>
                  </CFormSelect>
            </CCol>

            {/* besoinAppui */}
            <CCol md='12'>
            <CFormLabel className="mt-2">Besoin d'Appui</CFormLabel>
              <CFormSelect
                    name="besoinAppui"
                    multiple
                    value={contactData.besoinAppui}
                    onChange={handleSelectChange}
                  >
                    <option value="Formation">Formation</option>
                    <option value="Accompagnement">Accompagnement</option>
                    <option value="Financement">Financement</option>
              </CFormSelect>
              </CCol>

            {/* typeProgAccSuivi */}
            <CCol md='12'>
            <CFormLabel className="mt-2">Type de Programme d'Accompagnement Suivi</CFormLabel>
                  <CFormSelect
                    name="typeProgAccSuivi"
                    multiple
                    value={contactData.typeProgAccSuivi}
                    onChange={handleSelectChange}
                  >
                    <option value="Incubateur">Incubateur</option>
                    <option value="Accélérateur">Accélérateur</option>
                    <option value="Coaching personnalisé">Coaching personnalisé</option>
                  </CFormSelect>
            </CCol>
            {/* typeProgFormationSuivi */}
            <CCol md='12'>
            <CFormLabel className="mt-2">Type de Programme d'Accompagnement Suivi</CFormLabel>
                  <CFormSelect

                    name="typeProgFormationSuivi"
                    multiple
                    value={contactData.typeProgFormationSuivi}
                    onChange={handleSelectChange}
                  >
                    <option value="Gestion financière">Gestion financière</option>
                    <option value="Marketing digital">Marketing digital</option>
                    <option value="Stratégie d'entreprise">Stratégie d'entreprise</option>
                    <option value="Développement personnel">Développement personnel</option>
                  </CFormSelect>
            </CCol>
                  </fieldset>
            </CCol>
            </CRow>
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

export default CreateContact;
