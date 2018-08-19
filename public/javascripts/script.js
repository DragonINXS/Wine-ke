function submitBtnSignup() {
  document.getElementById("signupForm").submit();
}

function submitBtnLogin() {
  document.getElementById("loginForm").submit();
}

$('#type').change(function () {
    const typeId = $(this).val();
    // console.log('typeid: ', typeId);
    axios.get('/api/getVarietals/' + typeId)
        .then((relevantVarietals) => {
            // console.log(relevantVarietals.data);
            $('#varietal').empty();
            $('#varietal').append('<option>varietal</option>');

            relevantVarietals.data.forEach(aVarietal => {
                $('#varietal').append(`<option value=${aVarietal._id}>${aVarietal.name}</option>`); 
            });
        });
});

$('#varietal').change(function () {
    const varietalId = $(this).val();
    // console.log('varietalid: ', varietalId);
    axios.get('/api/getRegions/' + varietalId)
        .then((response) => {
            $('#country').empty();
            $('#country').append('<option>country</option>');

            response.data.possibleRegions.forEach(function (aRegion) {
                    $('#country').append(`<option value=${aRegion.parentCountry._id}>${aRegion.parentCountry.name}</option>`);
            });
        });
});

$('#country').change(function () {
    const countryId = $(this).val();
    const varietalId = $('#varietal').val();

    console.log('varietalId: ', varietalId);
    axios.get(`/api/populateRegions/${varietalId}/${countryId}`)
        .then((relevantRegions) => {
            console.log(relevantRegions.data);
            $('#region').empty();
            $('#region').append('<option>region</option>');

            relevantRegions.data.forEach(aRegion => {
                $('#region').append(`<option value=${aRegion._id}>${aRegion.name}</option>`);
                
            });
        });
});

//when region changes -> populate region pairings
$('#region').change(function () {
    const regionId = $(this).val();
    const varietalId = $('#varietal').val();

    // console.log('regionId: ', regionId);
    // console.log('varietalId: ', varietalId);

    axios.get(`/api/populateRegionPairings/${varietalId}/${regionId}`)
        .then((relevantRegionPairing) => {
            // console.log(relevantRegionPairing.data);
            relevantRegionPairing.data.forEach(aRelevantRegionPairing => {
                console.log('helloooooo nick');
                console.log('aRelevantRegionPairing._id: ', aRelevantRegionPairing);
                console.log('aRelevantRegionPairing.pairings: ', aRelevantRegionPairing);

                $('#regionPairing').append(`<a href='https://www.ubereats.com/en-US/search/?q=${aRelevantRegionPairing}' target='_blank'>${aRelevantRegionPairing}</a>`);
            });
        });
});

// $('#varietal').change(function () { console.log('YOOOOOOOOvarietal'); });
// $('#country').change(function () { console.log('YOOOOOOOOcountry'); });
// $('#region').change(function () { console.log('YOOOOOOOOregion'); });