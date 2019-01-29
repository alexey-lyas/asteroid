


(function()
{
    var loader = new THREE.TextureLoader();
    var parts = [];



    loader.load(
        // resource URL
        'Sprite.png',

        // onLoad callback
        function ( texture )
        {
            var scene = new THREE.Scene();

            var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
            camera.position.z = 16;

            var renderer = new THREE.WebGLRenderer();
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.querySelector("body").appendChild(renderer.domElement);

            var asteroid = new Asteroid({
                map: texture
            });

            scene.add(asteroid.object3D);

            renderer.render(scene, camera);

            function tick()
            {
                requestAnimationFrame(tick);

                asteroid.tick();

                renderer.render(scene, camera);
            }

            document.addEventListener("click", function(){ asteroid.blow(); }, false);

            tick();
        },

        // onProgress callback currently not supported
        undefined,

        // onError callback
        function ( err ) {
            console.error( 'An error happened.' );
        }
    );

})();