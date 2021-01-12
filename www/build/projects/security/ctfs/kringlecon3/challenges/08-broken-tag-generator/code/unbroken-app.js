$(() => {
  const canvas = new fabric.Canvas('c');
  window.c = canvas;
  
  canvas.preserveObjectStacking = true;

  const clearCanvas = () => {
    canvas.clear();
    canvas.setBackgroundColor('rgb(255, 255, 255)', canvas.renderAll.bind(canvas));
  };

  clearCanvas();

  const errorParent = document.querySelector('.error-msg');
  const errorMsg = document.querySelector('.error-msg .error-text');
  const errorClose = document.querySelector('.error-msg button');

  errorClose.addEventListener('click', () => {
    errorParent.classList.remove('open');
  });
  
  const fontList = document.querySelector('.font-list');
  const clipartHolder = document.querySelector('.clipart');
  const templatesHolder = document.querySelector('.templates');
  const templateLinks = document.querySelectorAll('.templates li');
  const colorPicker = document.querySelector('.color-picker');
  const moveForwardBtn = document.querySelector('.moveForward');
  const moveBackwardBtn = document.querySelector('.moveBackward');
  const moveToFrontBtn = document.querySelector('.moveToFront');
  const moveToBackBtn = document.querySelector('.moveToBack');
  const potentialFonts = ['American Typewriter','Andale Mono','Arial','Arial Black','Arial Narrow','Arial Rounded MT Bold','Arial Unicode MS','Avenir','Avenir Next','Avenir Next Condensed','Bahnschrift','Baskerville','Big Caslon','Bodoni 72','Bodoni 72 Oldstyle','Bodoni 72 Smallcaps','Bradley Hand','Brush Script MT','Calibri','Cambria','Cambria Math','Candara','Chalkboard','Chalkboard SE','Chalkduster','Charter','Cochin','Comic Sans MS','Consolas','Constantia','Copperplate','Corbel','Courier','Courier New','DIN Alternate','DIN Condensed','Didot','Ebrima','Franklin Gothic Medium','Futura','Gabriola','Gadugi','Geneva','Georgia','Gill Sans','Helvetica','Helvetica Neue','Herculanum','Hoefler Text','HoloLens MDL2 Assets','Impact','Ink Free','Javanese Text','Leelawadee UI','Lucida Console','Lucida Grande','Lucida Sans Unicode','Luminari','MS Gothic','MV Boli','Malgun Gothic','Marker Felt','Marlett','Menlo','Microsoft Himalaya','Microsoft JhengHei','Microsoft New Tai Lue','Microsoft PhagsPa','Microsoft Sans Serif','Microsoft Tai Le','Microsoft YaHei','Microsoft Yi Baiti','MingLiU-ExtB','Monaco','Mongolian Baiti','Myanmar Text','Nirmala UI','Noteworthy','Optima','Palatino','Palatino Linotype','Papyrus','Phosphate','Rockwell','Savoye LET','Segoe MDL2 Assets','Segoe Print','Segoe Script','Segoe UI','Segoe UI Emoji','Segoe UI Historic','Segoe UI Symbol','SignPainter','SimSun','Sitka','Skia','Snell Roundhand','Sylfaen','Symbol','Tahoma','Times','Times New Roman','Trattatello','Trebuchet MS','Verdana','Webdings','Wingdings','Yu Gothic','Zapfino'];
  const availableFonts = potentialFonts.filter(font => document.fonts.check(`12px "${font}"`));

  const templates = {
    blank: '{"version":"4.0.0-rc.1","objects":[],"background":"rgb(255, 255, 255)"}',
    frenchhens: '{"version":"4.0.0-rc.1","objects":[{"type":"image","version":"4.0.0-rc.1","originX":"left","originY":"top","left":2.24,"top":1,"width":800,"height":600,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"cropX":0,"cropY":0,"src":"/images/backgrounds/snowy2.jpg","crossOrigin":null,"filters":[]},{"type":"image","version":"4.0.0-rc.1","originX":"left","originY":"top","left":74.87,"top":312.17,"width":156,"height":159,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1.33,"scaleY":1.33,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"cropX":0,"cropY":0,"src":"/images/hen3.png","crossOrigin":null,"filters":[]},{"type":"image","version":"4.0.0-rc.1","originX":"left","originY":"top","left":303.3,"top":225.98,"width":156,"height":159,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1.28,"scaleY":1.28,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"cropX":0,"cropY":0,"src":"/images/hen2.png","crossOrigin":null,"filters":[]},{"type":"image","version":"4.0.0-rc.1","originX":"left","originY":"top","left":520.75,"top":281.06,"width":156,"height":159,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1.28,"scaleY":1.28,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"cropX":0,"cropY":0,"src":"/images/hen1.png","crossOrigin":null,"filters":[]},{"type":"image","version":"4.0.0-rc.1","originX":"left","originY":"top","left":721.46,"top":469.17,"width":237,"height":522,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":0.2,"scaleY":0.2,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"cropX":0,"cropY":0,"src":"/images/kringle_logo_red.png","crossOrigin":null,"filters":[]},{"type":"image","version":"4.0.0-rc.1","originX":"left","originY":"top","left":36.14,"top":48.61,"width":987,"height":59,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":0.74,"scaleY":0.74,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"cropX":0,"cropY":0,"src":"/images/kc3.png","crossOrigin":null,"filters":[]}],"background":"rgb(255, 255, 255)"}',
    santa: '{"version":"4.0.0-rc.1","objects":[{"type":"image","version":"4.0.0-rc.1","originX":"left","originY":"top","left":0.25,"top":-1,"width":800,"height":600,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"cropX":0,"cropY":0,"src":"/images/backgrounds/snowy4.jpg","crossOrigin":null,"filters":[]},{"type":"image","version":"4.0.0-rc.1","originX":"left","originY":"top","left":243.29,"top":70.12,"width":286,"height":390,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"cropX":0,"cropY":0,"src":"/images/santa.png","crossOrigin":null,"filters":[]},{"type":"image","version":"4.0.0-rc.1","originX":"left","originY":"top","left":140.77,"top":476.07,"width":700,"height":106,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":0.69,"scaleY":0.69,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"cropX":0,"cropY":0,"src":"/images/hhc.png","crossOrigin":null,"filters":[]}],"background":"rgb(255, 255, 255)"}',
    jackfrost: '{"version":"4.0.0-rc.1","objects":[{"type":"image","version":"4.0.0-rc.1","originX":"left","originY":"top","left":3.24,"top":-1,"width":800,"height":600,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"cropX":0,"cropY":0,"src":"/images/backgrounds/snowy3.jpg","crossOrigin":null,"filters":[]},{"type":"image","version":"4.0.0-rc.1","originX":"left","originY":"top","left":616.03,"top":193.77,"width":223,"height":500,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":0.68,"scaleY":0.68,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"cropX":0,"cropY":0,"src":"/images/jack.png","crossOrigin":null,"filters":[]},{"type":"image","version":"4.0.0-rc.1","originX":"left","originY":"top","left":72.32,"top":109.04,"width":600,"height":381,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":0.86,"scaleY":0.86,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"cropX":0,"cropY":0,"src":"/images/card.png","crossOrigin":null,"filters":[]},{"type":"textbox","version":"4.0.0-rc.1","originX":"left","originY":"top","left":266.46,"top":259.3,"width":150,"height":22.6,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"text":"Your text here...","fontSize":20,"fontWeight":"normal","fontFamily":"Arial Narrow","fontStyle":"normal","lineHeight":1.16,"underline":false,"overline":false,"linethrough":false,"textAlign":"left","textBackgroundColor":"","charSpacing":0,"minWidth":20,"splitByGrapheme":false,"styles":{}},{"type":"image","version":"4.0.0-rc.1","originX":"left","originY":"top","left":75.94,"top":460.14,"width":700,"height":106,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":0.73,"scaleY":0.73,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"cropX":0,"cropY":0,"src":"/images/hhc.png","crossOrigin":null,"filters":[]}],"background":"rgb(255, 255, 255)"}',
    northpole: '{"version":"4.0.0-rc.1","objects":[{"type":"image","version":"4.0.0-rc.1","originX":"left","originY":"top","left":0,"top":0,"width":800,"height":600,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"cropX":0,"cropY":0,"src":"/images/backgrounds/snowy.jpg","crossOrigin":null,"filters":[]},{"type":"image","version":"4.0.0-rc.1","originX":"left","originY":"top","left":34.04,"top":80.55,"width":700,"height":416,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"cropX":0,"cropY":0,"src":"/images/north_pole.png","crossOrigin":null,"filters":[]},{"type":"image","version":"4.0.0-rc.1","originX":"left","originY":"top","left":413.32,"top":511.89,"width":700,"height":106,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":0.5,"scaleY":0.5,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"cropX":0,"cropY":0,"src":"/images/hhc.png","crossOrigin":null,"filters":[]},{"type":"textbox","version":"4.0.0-rc.1","originX":"left","originY":"top","left":42.02,"top":17.88,"width":150,"height":22.6,"fill":"#f22e21","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":2.54,"scaleY":2.54,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"text":"Greetings","fontSize":20,"fontWeight":"normal","fontFamily":"Arial","fontStyle":"normal","lineHeight":1.16,"underline":false,"overline":false,"linethrough":false,"textAlign":"left","textBackgroundColor":"","charSpacing":0,"minWidth":20,"splitByGrapheme":false,"styles":{}},{"type":"textbox","version":"4.0.0-rc.1","originX":"left","originY":"top","left":109.85,"top":82.89,"width":150,"height":22.6,"fill":"#f22e21","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1.17,"scaleY":1.17,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"text":"from the","fontSize":20,"fontWeight":"normal","fontFamily":"Arial","fontStyle":"normal","lineHeight":1.16,"underline":false,"overline":false,"linethrough":false,"textAlign":"left","textBackgroundColor":"","charSpacing":0,"minWidth":20,"splitByGrapheme":false,"styles":{}}],"background":"rgb(255, 255, 255)"}',
  };

  for (let tIndex = 0; tIndex < templateLinks.length; tIndex += 1) {
    templateLinks[tIndex].addEventListener('click', evt => {
      const templateName = evt.currentTarget.attributes['data-template'].value;
      loadTemplate(templateName);
      templatesHolder.classList.add('hidden');
    });
  }

  const loadTemplate = name => {
    if (templates[name]) {
      canvas.loadFromJSON(templates[name]);
    }
  };

  window.loadTemplate = loadTemplate;

  availableFonts.forEach(font => {
    const fontOption = $("<option />", { text: font, value: font });
    fontOption.appendTo(fontList);
  });

  fontList.addEventListener('change', event => {
    const active = canvas.getActiveObjects();
    active.forEach(obj => {
      if (getType(obj) === 'text') {
        obj.fontFamily = event.target.value;
        canvas.renderAll();
      }
    });
    canvasModifiedCallback();
  });

  colorPicker.addEventListener('change', event => {
    const active = canvas.getActiveObjects();
    active.forEach(obj => {
      if (getType(obj) === 'text' && event.target.value) {
        obj.set( 'fill', event.target.value );
        canvas.renderAll();
      }
    });
    canvasModifiedCallback();
  });

  const addImage = imgElement => {
    var imgInstance = new fabric.Image(imgElement, {
      left: (canvas.width - imgElement.naturalWidth) / 2,
      top: (canvas.height - imgElement.naturalHeight) / 2,
      angle: 0,
      opacity: 1
    });
    canvas.add(imgInstance).setActiveObject(imgInstance);
  }
  
  const handleSave = () => {
    canvas.discardActiveObject();
    canvas.requestRenderAll();
    const dataURL = canvas.toDataURL({
      width: canvas.width,
      height: canvas.height,
      left: 0,
      top: 0,
      format: 'png',
    });
    const link = document.createElement('a');
    link.download = 'image.png';
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  $('.shareBtn').click(() => {
    const dataURL = canvas.toDataURL({
      width: canvas.width,
      height: canvas.height,
      left: 0,
      top: 0,
      format: 'png',
    });
    $.ajax({
      type: 'POST',
      url: '/save',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({ dataURL }),
      success: (res, status) => {
        if (res.id) {
          window.location = `/share?id=${res.id}`;
        }
      }
    });
  });

  $('button.addtext').click(() => {
    const textbox = new fabric.Textbox('Add Your Text', {
      left: 50,
      top: 50,
      width: 150,
      fontSize: 20,
    });
    canvas.add(textbox).setActiveObject(textbox);
  });
  
  const saveBtn = document.querySelector('.saveBtn');
  saveBtn.addEventListener('click', handleSave);
  
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  const clearBtn = document.querySelector('.clearBtn');
  clearBtn.addEventListener('click', () => {
    if (window.confirm('Are you sure?')) { 
      clearCanvas();
      localStorage.clear();
      $('.uploadForm')[0].reset();
      $('[for=file-1] span').text('Select file(s)');
    }
  });
  
  const cookieVal = localStorage.getItem('card_data');
  if (cookieVal) {
    try {
      canvas.loadFromJSON(cookieVal);
    } catch (err) {
      localStorage.clear();  
    }
  }
  
  var canvasModifiedCallback = function() {
    localStorage.setItem('card_data', JSON.stringify(canvas.toJSON()));
  };
  
  canvas.on({
    'object:added': canvasModifiedCallback,
    'object:removed': canvasModifiedCallback,
    'object:modified': canvasModifiedCallback,
    'selection:updated': selectionModifiedCallback,
    'selection:created': selectionModifiedCallback,
    'selection:cleared': selectionModifiedCallback,
  });

  const enableFontOptions = () => {
    fontList.removeAttribute('disabled');
    colorPicker.removeAttribute('disabled');
  };

  const disableFontOptions = () => {
    fontList.setAttribute('disabled', true);
    colorPicker.setAttribute('disabled', true);
  };

  disableFontOptions();

  const enablePositionOptions = () => {
    moveBackwardBtn.removeAttribute('disabled');
    moveForwardBtn.removeAttribute('disabled');
    moveToFrontBtn.removeAttribute('disabled');
    moveToBackBtn.removeAttribute('disabled');
  };

  const disablePositionOptions = () => {
    moveBackwardBtn.setAttribute('disabled', true);
    moveForwardBtn.setAttribute('disabled', true);
    moveToFrontBtn.setAttribute('disabled', true);
    moveToBackBtn.setAttribute('disabled', true);
  };

  disablePositionOptions();

  const getType = obj => {
    if (obj && obj.type === 'image') {
      return 'image';
    } else if (obj) {
      return 'text';
    } else {
      return false;
    }
  };

  const getTypes = active => active.map(obj => getType(obj));
  const hasText = types => types.indexOf('text') !== -1;
  const hasImage = types => types.indexOf('image') !== -1;

  function selectionModifiedCallback(obj){
    const active = canvas.getActiveObjects();
    const types = getTypes(active);
    
    if (hasText(types)) {
      enableFontOptions();
      const allTextObjects = types.filter(type => 'text');
      const allFontsUsed = allTextObjects.map(obj => obj.fontFamily);
      const allColorsUsed = allTextObjects.map(obj => obj.fill);
      if (allTextObjects.length > 1) {
        fontList.value = '';
        const uniqueFontsUsed = allFontsUsed.filter((item, index, self) => self.indexOf(item) === -1);
        colorPicker.value = allColorsUsed[0];
        if (uniqueFontsUsed.length === 1 && availableFonts.indexOf(uniqueFontsUsed[0]) !== -1) {
          fontList.value = uniqueFontsUsed[0];
        }
      } else {
        active.forEach(obj => {
          if (getType(obj) === 'text') {
            const family = obj.fontFamily;
            if (availableFonts.indexOf(family) !== -1) {
              fontList.value = family;
              colorPicker.value = obj.fill;
            }
          }
        });
      }
    } else {
      disableFontOptions();
    }

    if (active.length) {
      enablePositionOptions(); 
    } else {
      disablePositionOptions();
    }
  }

  $('html').keydown(function(e){
    if(e.keyCode == 46) {
      if(canvas.getActiveObject()) {
        canvas.remove(canvas.getActiveObject());
      }
    }
  });

  $('.moveForward').click(() => {
    if(canvas.getActiveObject()) {
      canvas.bringForward(canvas.getActiveObject());
    }
  });

  $('.moveBackward').click(() => {
    if(canvas.getActiveObject()) {
      canvas.sendBackwards(canvas.getActiveObject());
    }
  });

  $('.moveToFront').click(() => {
    if(canvas.getActiveObject()) {
      canvas.bringToFront(canvas.getActiveObject());
    }
  });

  $('.moveToBack').click(() => {
    if(canvas.getActiveObject()) {
      canvas.sendToBack(canvas.getActiveObject());
    }
  });

  $('.fileSelection').change(function(){ 
    console.log("File is added!"); 
    $('.uploadFile').prop( "disabled", false );
  });

  $('ul.clipart img').click(event => {
    if(event.currentTarget) addImage(event.currentTarget);
  });

  $('.addImage').click(evt => {
    const clipartBtn = $('.addImage span').get(0);
    if (clipartBtn.innerText === 'Show Clipart') {
      clipartHolder.classList.remove('closed');
      clipartBtn.innerText = 'Hide Clipart'
    } else {
      clipartHolder.classList.add('closed');
      clipartBtn.innerText = 'Show Clipart';
    }
  });
  $('.uploadFile').prop( "disabled", true );
  $('.inputfile').click(evt => {
    if ($('[for=file-1] span').text() !== 'Select file(s)') {
      evt.preventDefault();
  
      var form = $('.uploadForm')[0];
      var data = new FormData(form);
      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "/upload",
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          $('.uploadForm')[0].reset();
          $('[for=file-1] span').text('Select file(s)');
            setTimeout(() => {
              data.forEach(id => {
                var img = $('<img id="dynamic">');
                img.attr('src', `/image?id=${id}`);
                img.on('load', () => {
                  const imgElement = img[0];
                  var imgInstance = new fabric.Image(imgElement, {
                    left: (canvas.width - imgElement.width) / 2,
                    top: (canvas.height - imgElement.height) / 2,
                    angle: 0,
                    opacity: 1
                  });
                  canvas.add(imgInstance);
                });
              });
            }, 500);
        },
        error: function (e) {
          console.log("ERROR : ", e);
          errorMsg.innerHTML = e.responseText;
          errorParent.classList.add('open');
        }
      });
    }  
  });
});

var inputs = document.querySelectorAll( '.inputfile' );
Array.prototype.forEach.call( inputs, function( input )
{
  var label	 = input.nextElementSibling,
    labelVal = label.innerHTML;

  input.addEventListener( 'change', function( e )
  {
    var fileName = '';
    if( this.files && this.files.length > 1 )
      fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
    else
      fileName = e.target.value.split( '\\' ).pop();

    if( fileName )
      label.querySelector( 'span' ).innerHTML = fileName;
    else
      label.innerHTML = labelVal;
  });

  // Firefox bug fix
  input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
  input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
});
