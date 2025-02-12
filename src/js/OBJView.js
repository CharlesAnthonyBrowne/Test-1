var OBJLoader = require('famous/webgl-geometries/OBJLoader');
var Mesh = require('famous/webgl-renderables/Mesh');
var Geometry = require('famous/webgl-geometries/Geometry');
var Color = require('famous/utilities/Color');

function OBJView(node, peices) {

		OBJLoader.load('obj/macbook.obj', function(geometries) {
			for (var i = 0; i < geometries.length; i++) {
				var buffers = geometries[i];

				var geometry = new Geometry({
					buffers: [
						{ name: 'a_pos', data: buffers.vertices, size: 3 },
						{ name: 'a_normals', data: buffers.normals, size: 2 },
						{ name: 'a_texCoords', data: buffers.textureCoords, size: 1 },
						{ name: 'indices', data: buffers.indices, size: 1 }
					]
				});

				var peiceNode = node.addChild();
				var mesh = new Mesh(peiceNode)
					.setGeometry(geometry)
					.setBaseColor(new Color(peices[i].baseColor))
					.setGlossiness(new Color(peices[i].glossColor), peices[i].glossiness);
			}
		});
}

module.exports = OBJView;
