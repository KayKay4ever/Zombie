AFRAME.registerComponent('Z0MB1E',{
    init:function() {
        var posX= -150
        var posY= -50
        var posZ= -3
for (var i=1; i<=3; i++){
    var id= 'Z0MB1E${i}'; 
    var position= {x:posX, y:posY, z:posZ};
    posX= posX+ 100
    this.zombieSpawn(id, position);
} 
    },
    zombieSpawn: function(id, position){
    var environEL = document.querySelector('a-scene');
    var zombEL = document.createElement('a-entity')    
    zombEL.setAttribute('gltf-model','#Zs')
    zombEL.setAttribute('scale', '25 25 25')
    zombEL.setAttribute('position', position)
    zombEL.setAttribute('animation-mixer',{clip:'Walk'})

    }
}) 
