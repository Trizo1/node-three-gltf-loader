import { DRACOLoader, GLTFLoader, loadGltf, TextureLoader } from "node-three-gltf";

// init GLTFLoader and pass a path to a local file or a url to a web resource
const loader = new GLTFLoader();
loader.setDRACOLoader(new DRACOLoader());

loader.load("./models/valve_anim.gltf", (file) => {
  loader.parse(JSON.stringify(file.parser.json), "", (gltf) => {
    console.log(gltf);
  });
});

// there is also a small utility function that instantiates GLTFLoader and DRACOLoader
// and returns a Promise with the loaded content
/* const gltf = await loadGltf("path/to/file");
console.log(gltf.scene.children); */

// use TextureLoader, ImageLoader, or FileLoader independently
/* new TextureLoader().load("path/to/file", (texture) => {
  console.log(texture);
});
 */
