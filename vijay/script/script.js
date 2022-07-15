function _getPokeMonInfo() {
    const pokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=10";
  
      let _resolveJSON = (data) => {
          return data.json()
      }
      let _getParentEle = () => {
          return document.querySelector('.details-container');
      }
      let _appendChild = (parent, child) => {
          parent.append(child)
      }
      let _generateElements = (obj) => {
          let ele = document.createElement('h3');
          ele.setAttribute('class', 'pokemon-image')
          ele.innerHTML=obj.name;
          let parentElem = _getParentEle();
          // parentElem.append(ele);
          _appendChild(parentElem, ele)
      }
      let _getType = (data) => {
          let ele1 = document.createElement('div');
          ele1.setAttribute('class', 'pokemon-types')
          let ele2 = document.createElement('div');
          ele2.setAttribute('class', 'pokemon-images')
          data.types.forEach(function(obj) {
              const {name} = obj.type;
              let ele = document.createElement('span');
              ele.setAttribute('class', 'type')``
              ele.innerHTML=name;
              let br = document.createElement('br');
              ele1.append(ele)
              ele1.append(br)
              _appendChild(_getParentEle(), ele1);
          })
          let img = document.createElement('img');
              img.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`)
              ele1.append(img)
              _appendChild(_getParentEle(), ele2);
      }
      let _getPokeMonTypes = (obj) => {
          fetch(obj.url)
              .then(_resolveJSON)
              .then(_getType);
      }
  
      let _getData = (results) => {
          results?.results.forEach(function(obj){
              _getPokeMonTypes(obj);
              _generateElements(obj);
          });
      }
      
    try {
      fetch(pokemonUrl)
      .then(_resolveJSON)
      .then(_getData)
    } catch (err) {}
  }
  
  _getPokeMonInfo();
  