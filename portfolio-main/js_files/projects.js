        var scene2 = new THREE.Scene();
        var camera2 = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
        const canvas2 = document.querySelector('#proj');
        var renderer2 = new THREE.WebGLRenderer({ canvas2, alpha: true });
        renderer2.setSize(window.innerWidth, window.innerHeight);
        scene2.fog = new THREE.FogExp2('black', 0.001);
        renderer2.setClearColor(scene2.fog.color);
        document.body.appendChild(renderer2.domElement);

        const texture2 = new THREE.TextureLoader().load('imgs/moon.png');
        var geometry2 = new THREE.SphereGeometry(1, 0, 0);
        var material2 = new THREE.MeshBasicMaterial({ color: "transparent" });
        var cube_2 = new THREE.Mesh(geometry2, material2);
        cube_2.position.y = -7;
        cube_2.position.z = 10;
        camera2.position.y = -4;
        scene2.add(cube_2);
        const domEvents = new THREEx.DomEvents(camera2, renderer2.domElement);
        domEvents.addEventListener(cube_2, 'click', event => {
            location.href = "solarsys.html";
        });

        var cube_22 = new THREE.Mesh(geometry2, material2);
        cube_22.position.x = 4;
        cube_22.position.y = -7;
        cube_22.position.z = 10;
        // camera2.position.y=-4;
        scene2.add(cube_22);
        var cube_23 = new THREE.Mesh(geometry2, material2);
        cube_23.position.x = -4;
        cube_23.position.y = -7;
        cube_23.position.z = 10;
        scene2.add(cube_23);
        camera2.position.z = 22;
        var render_2 = function() {
            requestAnimationFrame(render_2);

            cube_2.rotation.x += 0.01;
            cube_2.rotation.y += 0.01;
            cube_22.rotation.x += 0.01;
            cube_22.rotation.y += 0.01;
            cube_23.rotation.x += 0.01;
            cube_23.rotation.y += 0.01;

            renderer2.render(scene2, camera2);
        };

        render_2();