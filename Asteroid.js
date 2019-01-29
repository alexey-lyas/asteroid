function Asteroid(props)
{
    this._blow = false;

    var MIN_SPEED = 0.2;
    var MAX_SPEED = 0.12;

    var MIN_ROTATION_SPEED = 0.01;
    var MAX_ROTATION_SPEED = 0.004;

    this._ACCELERATION = 0.96;

    var uvs = [
        [
            0, 1,
            0.3333, 1,
            0, 0.6667,
            0.3333, 0.6667
        ],

        [
            0.3333, 1,
            0.6667, 1,
            0.3333, 0.6667,
            0.6667, 0.6667
        ],

        [
            0.6667, 1,
            1, 1,
            0.6667, 0.6667,
            1, 0.6667
        ],

        [
            0, 0.6667,
            0.3333, 0.6667,
            0, 0.3333,
            0.3333, 0.3333
        ],

        [
            0.3333, 0.6667,
            0.6667, 0.6667,
            0.3333, 0.3333,
            0.6667, 0.3333
        ],

        [
            0.6667, 0.6667,
            1, 0.6667,
            0.6667, 0.3333,
            1, 0.3333
        ],

        [
            0.6667, 0.3333,
            1, 0.3333,
            0.6667, 0,
            1, 0
        ],

        [
            0.3333, 0.3333,
            0.6667, 0.3333,
            0.3333, 0,
            0.6667, 0
        ],

        [
            0, 0.3333,
            0.3333, 0.3333,
            0, 0,
            0.3333, 0
        ]
    ];

    var material = new THREE.MeshBasicMaterial({
        map: props.map,
        transparent: true
    });

    material.depthTest = false;
    material.depthWrite = false;

    this._material = material;

    var geometry1 = new THREE.PlaneBufferGeometry(2, 2, 1);
    geometry1.addAttribute("uv", new THREE.BufferAttribute(new Float32Array(uvs[0]), 2));

    var geometry2 = new THREE.PlaneBufferGeometry(2, 2, 1);
    geometry2.addAttribute("uv", new THREE.BufferAttribute(new Float32Array(uvs[1]), 2));

    var geometry3 = new THREE.PlaneBufferGeometry(2, 2, 1);
    geometry3.addAttribute("uv", new THREE.BufferAttribute(new Float32Array(uvs[2]), 2));

    var geometry4 = new THREE.PlaneBufferGeometry(2, 2, 1);
    geometry4.addAttribute("uv", new THREE.BufferAttribute(new Float32Array(uvs[3]), 2));

    var geometry5 = new THREE.PlaneBufferGeometry(2, 2, 1);
    geometry5.addAttribute("uv", new THREE.BufferAttribute(new Float32Array(uvs[4]), 2));

    var geometry6 = new THREE.PlaneBufferGeometry(2, 2, 1);
    geometry6.addAttribute("uv", new THREE.BufferAttribute(new Float32Array(uvs[5]), 2));

    var geometry7 = new THREE.PlaneBufferGeometry(2, 2, 1);
    geometry7.addAttribute("uv", new THREE.BufferAttribute(new Float32Array(uvs[6]), 2));

    var geometry8 = new THREE.PlaneBufferGeometry(2, 2, 1);
    geometry8.addAttribute("uv", new THREE.BufferAttribute(new Float32Array(uvs[7]), 2));

    var geometry9 = new THREE.PlaneBufferGeometry(2, 2, 1);
    geometry9.addAttribute("uv", new THREE.BufferAttribute(new Float32Array(uvs[8]), 2));

    var mesh1 = new THREE.Mesh(geometry1, material);
    mesh1.translateX(0.644269);
    mesh1.translateY(0.193429);

    var mesh2 = new THREE.Mesh(geometry2, material);
    mesh2.translateX(-0.026039);
    mesh2.translateY(0.659148);

    var mesh3 = new THREE.Mesh(geometry3, material);
    mesh3.translateX(0.447864);
    mesh3.translateY(-0.671796);

    var mesh4 = new THREE.Mesh(geometry4, material);
    mesh4.translateX(-0.723129);
    mesh4.translateY(0.610791);

    var mesh5 = new THREE.Mesh(geometry5, material);
    mesh5.translateX(-0.805708);
    mesh5.translateY(-0.056541);

    var mesh6 = new THREE.Mesh(geometry6, material);
    mesh6.translateX(-0.012151);
    mesh6.translateY(-0.337386);

    var mesh7 = new THREE.Mesh(geometry7, material);
    mesh7.translateX(-0.223188);
    mesh7.translateY(0.399506);

    var mesh8 = new THREE.Mesh(geometry8, material);
    mesh8.translateX(-0.592936);
    mesh8.translateY(0.172599);

    var mesh9 = new THREE.Mesh(geometry9, material);
    mesh9.translateX(-0.56169);
    mesh9.translateY(-0.735032);

    this._pieces = [];

    this._pieces.push({
        object3D: mesh1
    });

    this._pieces.push({
        object3D: mesh2
    });

    this._pieces.push({
        object3D: mesh3
    });

    this._pieces.push({
        object3D: mesh4
    });

    this._pieces.push({
        object3D: mesh5
    });

    this._pieces.push({
        object3D: mesh6
    });

    this._pieces.push({
        object3D: mesh7
    });

    this._pieces.push({
        object3D: mesh8
    });

    this._pieces.push({
        object3D: mesh8
    });

    this.object3D = new THREE.Group();

    for (var i = 0; i < this._pieces.length; i++)
    {
        var piece = this._pieces[i];
        var vectorLength = Math.sqrt(piece.object3D.position.x * piece.object3D.position.x + piece.object3D.position.y * piece.object3D.position.y);

        piece.normal = [
            piece.object3D.position.x / vectorLength,
            piece.object3D.position.y / vectorLength
        ];

        piece.speed = Math.random() * (MAX_SPEED - MIN_SPEED) + MIN_SPEED;
        piece.startSpeed = piece.speed;
        piece.rotationSpeed = (Math.random() >= 0.5 ? 1 : -1) * (Math.random() * (MAX_ROTATION_SPEED - MIN_ROTATION_SPEED) + MIN_ROTATION_SPEED);

        this.object3D.add(this._pieces[i].object3D);
    }

    this._splinters = [];

    for (var i = 0; i < 18; i++)
    {
        var x = (Math.random() >= 0.5 ? 1 : -1) * Math.random();
        var y = (Math.random() >= 0.5 ? 1 : -1) * Math.random();

        var vectorLength = Math.sqrt(x * x + y * y);

        var normal = [
            x / vectorLength,
            y / vectorLength
        ];

        var speed = Math.random() * (MAX_SPEED - MIN_SPEED) + MIN_SPEED;

        var o = {
            object3D: this._createSplinter(),
            speed: speed * 1.6,
            startSpeed: speed * 1.6,
            normal: normal,
            rotationSpeed: (Math.random() >= 0.5 ? 1 : -1) * (Math.random() * (MAX_ROTATION_SPEED - MIN_ROTATION_SPEED) + MIN_ROTATION_SPEED) * 10
        };

        this._splinters.push(o);

        this.object3D.add(o.object3D);
    }
}

Asteroid.prototype._createSplinter = function()
{
    var rnd = Math.random();

    var color = 0xff0000;

    if (rnd <= 0.3)
    {
        color = 0x00ff00;
    }
    else if (rnd >= 0.7)
    {
        color = 0xffff00;
    }

    var geometry = new THREE.PlaneBufferGeometry(0.2, 0.2, 1);

    var material = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true
    });

    var mesh = new THREE.Mesh(geometry, material);

    mesh.scale.x = 0;
    mesh.scale.y = 0;

    return mesh;
};

Asteroid.prototype.blow = function()
{
    this._blow = true;
};

Asteroid.prototype.tick = function()
{
    if (!this._blow)
    {
        return;
    }

    for (var i = 0; i < this._pieces.length; i++)
    {
        var piece = this._pieces[i];

        piece.object3D.position.x = piece.object3D.position.x + piece.normal[0] * piece.speed;
        piece.object3D.position.y = piece.object3D.position.y + piece.normal[1] * piece.speed;
        piece.object3D.rotation.z += piece.rotationSpeed;
        piece.object3D.scale.x = piece.speed / piece.startSpeed * 0.7 + 0.3;
        piece.object3D.scale.y = piece.speed / piece.startSpeed * 0.7 + 0.3;
        this._material.opacity = piece.speed / piece.startSpeed;

        /*if (piece.speed / piece.startSpeed < 0.1)
        {
            this._material.opacity = 0;
        }*/

        piece.speed *= this._ACCELERATION;
    }

    for (var i = 0; i < this._splinters.length; i++)
    {
        var splinter = this._splinters[i];

        splinter.object3D.position.x = splinter.object3D.position.x + splinter.normal[0] * splinter.speed;
        splinter.object3D.position.y = splinter.object3D.position.y + splinter.normal[1] * splinter.speed;
        splinter.object3D.rotation.x += splinter.rotationSpeed;
        splinter.object3D.rotation.y += splinter.rotationSpeed;

        splinter.object3D.scale.x = Math.sin(splinter.speed / splinter.startSpeed * Math.PI);
        splinter.object3D.scale.y = Math.sin(splinter.speed / splinter.startSpeed * Math.PI);

        /*if (piece.speed / piece.startSpeed < 0.1)
        {
            this._material.opacity = 0;
        }*/

        splinter.speed *= this._ACCELERATION;
    }
};