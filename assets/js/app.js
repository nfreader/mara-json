var index = 0;

var imgdir = 'assets/img/';

var defaults = {
  'header-left':'UESCTerm 802.11 (remote override)',
  'header-right':'Date',
  'footer-left':'CAS.qterm//CyberAcme Systems, Inc.',
  'footer-right':'<931.461.60231.14.vt920>', 
  "terminals" : [
    {
      "type":"logon",
      "image":null,
      "text":"mara-json\r\nv. 1.0(beta)"
    },
    {
      "type":"text",
      "image":130,
      "defaultColor":"darkgreen",
      "text":"<span class='yellow'><strong>Begin readback:</strong> sec. 081 229-J</span>\n\n----------------\n\nI met a traveller from an antique land Who said: \"Two vast and trunkless legs of stone Stand in the desert. Near them, on the sand, Half sunk, a shattered visage lies, whose frown, And wrinkled lip, and sneer of cold command,Tell that its sculptor well those passions read Which yet survive, stamped on these lifeless things, The hand that mocked them and the heart that fed: And on the pedestal these words appear:\n\n <span class='green'>'My name is <em>Ozymandias</em>, king of kings: Look on my works, ye Mighty, and despair!'</span>\n\n Nothing beside remains. Round the decay Of that colossal wreck, boundless and bare The lone and level sands stretch far away.\"\n\n----------------\n\n<span class='yellow'><strong>\\\\-EOF-\\\\</span>",    
    },
    {
      "type":"image",
      "image":130,
      "text":"3.14159265358979323846264338327950288419716939\n3.14159265358979323846264338327950288419716939\n3.14159265358979323846264338327950288419716939\n3.14159265358979323846264338327950288419716939\n3.14159265358979323846264338327950288419716939\n3.14159265358979323846264338327950288419716939\n3.14159265358979323846264338327950288419716939\n3.14159265358979323846264338327950288419716939\n3.14159265358979323846264338327950288419716939\n3.14159265358979323846264338327950288419716939\n3.14159265358979323846264338327950288419716939\n3.14159265358979323846264338327950288419716939\n3.14159265358979323846264338327950288419716939\n3.14159265358979323846264338327950288419716939\n3.14159265358979323846264338327950288419716939\n3.14159265358979323846264338327950288419716939\n3.14159265358979323846264338327950288419716939\n3.14159265358979323846264338327950288419716939\n3.14159265358979323846264338327950288419716939\n3.14159265358979323846264338327950288419716939\n3.14159265358979323846264338327950288419716939\n3.14159265358979323846264338327950288419716939\n"      
    },
    {
      "type":"logoff",
      "image":129,
      "text":"remember me"      
    },
  ]
};

var max = defaults.terminals.length;
max = max - 1;

$(document).ready(function(){
  $('#terminal-header #left').text(defaults['header-left']);
  $('#terminal-header #right').text(defaults['header-right']);
  $('#terminal-footer #left').text(defaults['footer-left']);
  $('#terminal-footer #right').text(defaults['footer-right']);
  $.each(defaults['terminals'], function(n,m) {
    if(n == index) {
      renderTerminal(m);
    }
  });
});

function renderTerminal(data) {
  if(data.image == null) {
    var image = "128";
  } else {
    var image = data.image;
  }
  if(data.defaultColor == null) {
    var defaultColor = 'green';
  } else {
    var defaultColor = data.defaultColor;
  }
  image = imgdir+image;
  switch(data.type) {
    case 'logon':
    case 'logoff':
    var img = "<img src='"+image+".jpg' class='logon' />";
    console.log(data.type);
    break;

    case 'image':
    var img = "<img src='"+image+".jpg' class='image' />";
    console.log(data.type);
    break;

    case 'text':
    var img = "";
    console.log(data.type);
    break;
  }

  var text = data.text.replace(/(\r\n|\n|\r)/gm, "<br>");
  var text = "<span class='"+defaultColor+"'>"+text+"</span>";
  $('#terminal').removeClass().addClass(data.type, true);
  $('#terminal #terminal-body').empty();
  $('#terminal #terminal-body').html(img);
  $('#terminal #terminal-body').append(text);
}

$(document).keypress(function(event){

    if (event.keyCode == 13 && event.shiftKey == false && index < max) {
      index++;
      console.log('Viewing '+index+' Max is ' + max);
      renderTerminal(defaults['terminals'][index]);
    }
    else if (event.keyCode == 13 && event.shiftKey == true && index != 0) {
      index--;
      console.log('Viewing '+index);
      renderTerminal(defaults['terminals'][index]);
    }

})