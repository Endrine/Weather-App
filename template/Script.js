<script>
    
var latitude = document.getElementById("latitude");
var longitude = document.getElementById("longitude");

console.log(latitude)


function getLocation() {
    window.navigator.geolocation.getCurrentPosition(position =>
        
        {
        latitude.value=position.coords.latitude ,
        longitude.value=position.coords.longitude 
        }

        )

}


getLocation();
</script>