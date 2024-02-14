const FormNav = () => {
        const [selectedForm, setSelectedForm] = useState('form1');
      
        const handleFormChange = (form) => {
          setSelectedForm(form);
        };
      

    return (
        <div class="h-10 flex flex-row w-2/5">
            <div onClick={() => handleFormChange('form1')} class=" mr-1 p-1 rounded-t-lg w-1/4 bg-green hover:cursor-pointer">
                <h1 class="text-lg text-center text-white">General</h1>
            </div>
            <div onClick={() => handleFormChange('form2')}class=" mr-1 p-1 rounded-t-lg w-1/4 bg-gray hover:cursor-pointer">
                <h1 class="text-lg text-center text-white">Records</h1>
            </div>
            <div onClick={() => handleFormChange('form3')} class=" mr-1 p-1 rounded-t-lg w-1/4 bg-gray hover:cursor-pointer">
                <h1 class="text-lg text-center text-white">Contacts</h1>
            </div>
            <div onClick={() => handleFormChange('form4')} class="p-1 rounded-t-lg w-1/4 bg-gray hover:cursor-pointer">
                <h1 class="text-lg text-center text-white">Pedigree</h1>
            </div>

            {selectedForm === 'form1' && <PetCardForm />}
            {selectedForm === 'form2' && <RecordsForm />}
            {selectedForm === 'form3' && <ContactsForm />}
            {selectedForm === 'form4' && <PedigreeForm />}
        </div>
    )
};

export default FormNav;