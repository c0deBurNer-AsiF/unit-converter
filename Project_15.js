var selector=document.querySelector("#selector select");

selector.addEventListener("change", ()=>{
    var length_values=["Kilometre","Metre","Centimetre","Milimetre","Micrometre","Nanometre","Mile","Yard","Foot","Inch"]
    var area_values=["Square kilometre","Square metre","Square mile","Square yard","Square foot","Square inch","Hectare","Acre"]
    var volume_values=["Cubic metre","Liter",'Milliliter',"Cubic foot","Cubic inch"];
    var temperature_values=['Degree Celsius' , 'Fahrenheit' , 'Kelvin'];

    var unit_select1=document.getElementById("unit1");
    var unit_select2=document.getElementById("unit2");

    unit_select1.innerHTML = "";
    unit_select2.innerHTML = "";
    formula.innerHTML="";
    result1.value=1;
    result2.value=1;



    var units;
    
    if (selector.value=="length")
    {
        units=length_values;

    }
    else if (selector.value=="area")
    {
        units=area_values;
    }
    else if (selector.value=="volume")
    {
        units=volume_values;
    }    
    else if (selector.value=="temperature")
    {
        units=temperature_values;
    }


    var i=0;

    for (i=0; i<units.length ; i++)
    {
    
        var option1=document.createElement("option")
        option1.value=units[i].toLowerCase();
        option1.text=units[i];
        unit_select1.appendChild(option1);


        var option2=document.createElement("option")
        option2.value=units[i].toLowerCase();
        option2.text=units[i];

        unit_select2.appendChild(option2);
    
    }

    
});

var result2=document.getElementById("result2")
var result1=document.getElementById("result1")

var unit_select1=document.getElementById("unit1");
var unit_select2=document.getElementById("unit2");
var formula=document.getElementById("formula");


var unitConverters={
    "kilometre":{
        "kilometre":1, "metre":1000, "centimetre":100000, "milimetre":1000000,
        "micrometre":1e+9, "nanometre":1e+12, "mile":1/1.609, "yard":1094, "foot":3280,
        "inch":39370
    },

    "metre":{
        "kilometre":1/1000, "metre":1, "centimetre":100, "milimetre":1000, "micrometre":1e+6,
        "nanometre":1e+9, "mile":1/1609, "yard":1.094, "foot":3.280, "inch":39.37
    },

    "centimetre":{
        "kilometre":1/100000, "metre":1/100, "centimetre":1, "milimetre":10, "micrometre":10000,
        "nanometre":1e+7, "mile":1/6.2137e-6, "yard":1/91.44, "foot":1/30.48, "inch":1/2.54
    },
    
    "milimetre":{
        "kilometre":1/1e-6, "metre":1/1000, "centimetre":1/10, "milimetre":1, "micrometre":1000,
        "nanometre":1e+6, "mile":1/1.609e+6, "yard":1/914.4, "foot":1/304.8, "inch":1/25.4
    },

    "micrometre":{
        "kilometre":1/1e+9, "metre":1/1e+6, "centimetre":1/10000, "milimetre":1/1000, "micrometre":1,
        "nanometre":1000, "mile":1/1.609e+9, "yard":1/914400, "foot":1/304800, "inch":1/25400
    },

    "nanometre":{
        "kilometre":1/1e+12, "metre":1/1e+9, "centimetre":1/1e+7, "milimetre":1/1e+6, "micrometre":1000,
        "nanometre":1, "mile":1/1.609e+12, "yard":1/9.144e+8, "foot":1/3.048e+8, "inch":1/2.54e+7
    },

    "mile":{
        "kilometre":1.609, "metre":1609, "centimetre":160990, "milimetre":1.609e+6, "micrometre":1.609e+9,
        "nanometre":1.609e+12, "mile":1, "yard":1760, "foot":5280, "inch":63360
    },

    "yard":{
        "kilometre":1/1094, "metre":1/1.094, "centimetre":91.44, "milimetre":914.4, "micrometre":914400,
        "nanometre":9.144e+8, "mile":1/1760, "yard":1, "foot":3, "inch":36
    }, 

    "foot":{
        "kilometre":1/3281, "metre":1/3.281, "centimetre":30.48, "milimetre":304.8, "micrometre":304800,
        "nanometre":3.048e+8, "mile":1/5280, "yard":1/3, "foot":1, "inch":1/12
    }, 

    "inch":{
        "kilometre":1/39370, "metre":1/39.87, "centimetre":2.54, "milimetre":25.4, "micrometre":25400,
        "nanometre":2.54e+7, "mile":1/63360, "yard":1/36, "foot":1/12, "inch":1
    }, 





    "square kilometre":{
        "square kilometre":1,"square metre":1e+6, "square mile":1/2.59, "square yard":1.196e+6,"square foot":1.076e+7,
        "square inch":1.55e+9, "hectare":100, "acre":247.1
    },

    "square metre":{
        "square kilometre":1/1e+6,"square metre":1, "square mile":1/2.59e+6, "square yard":1.196,"square foot":10.764,
        "square inch":1550, "hectare":1/10000, "acre":1/4047
    },

    "square mile":{
        "square kilometre":2.59,"square metre":2.59e+6, "square mile":1, "square yard":3.098e+6,"square foot":2.788e+7,
        "square inch":4.014e+9, "hectare": 259, "acre": 640
    },
 
    "square yard":{
        "square kilometre":1/1.196e+6,"square metre":1/1.196, "square mile":1/ 3.098e+6, "square yard":1,"square foot":9,
        "square inch":1296, "hectare": 1/11960, "acre": 1/4840
    },
    
    "square foot":{
        "square kilometre":1/1.076e+7,"square metre":1/10.764, "square mile":1/2.788e+7, "square yard":1/9,"square foot":1,
        "square inch": 144, "hectare": 1/107600, "acre": 1/43560
    },

    "square inch":{
        "square kilometre":1/ 1.55e+9,"square metre":1/1550, "square mile":1/4.014e+9, "square yard":1/1296,"square foot":1/144,  
        "square inch": 1, "hectare": 1/1.55e+7, "acre": 1/6.273e+6
    },
    
    "hectare":{
        "square kilometre":1/100,"square metre":1/10000, "square mile":1/259, "square yard":11960,"square foot":107600,  
        "square inch":1.55e+7, "hectare":1, "acre":2.471

    },

    "acre":{
        "square kilometre":1/247.1,"square metre":4047, "square mile":1/640, "square yard":4840,"square foot":43560,  
        "square inch":6.273e+6, "hectare":1/2.471, "acre":1

    },


    "cubic metre":{
        "cubic metre":1,"liter":1000, 'milliliter':1e+6, "cubic foot":35.315, "cubic inch":61020
    },

    "liter":{
        "cubic metre":1/1000,"liter":1, 'milliliter':1000, "cubic foot":1/28.317, "cubic inch":61.024
    },

    "cubic foot":{
        "cubic metre":1/35.315,"liter":28.317, 'milliliter':28320, "cubic foot":1, "cubic inch":1728
    },

    "cubic inch":{
        "cubic metre":1/61020,"liter":1/61.024, 'milliliter':16.387, "cubic foot":1/1728, "cubic inch":1
    },

    "degree celsius":{
        "degree celsius":function(value){
            return value;
        },

        "fahrenheit":function(value){
            return (value*9/5)+32
        },
        "kelvin":function(value){
            return (value+273.15)
        }
    },

    "fahrenheit":{
        "degree celsius":function(value){
            return(value-32) * 5/9
        }, 

        "fahrenheit":function(value){
            return value
        },

        "kelvin":function(value){
            return(value-32) * 5/9 + 273.15
        }
    },


    "kelvin":{
        "degree celsius":function(value){
            return(value-273.15)
        }, 
        "fahrenheit":function(value){
            return(value - 273.15) * 9/5 + 32
        },
        "kelvin":function(value){
            return value
        }
    }




    
    

}

var formulaDescription={

    "degree celsius":{
        "degree celsius":"Multiply by 1", "fahrenheit":"(inputvalue°C × 9/5) + 32", "kelvin":"inputValue°C + 273.15 "
    },
    
    "fahrenheit":{
        "degree celsius":"(inputValue°F − 32) × 5/9 ", "fahrenheit":"Multiply by 1", "kelvin":"(inputValue°F − 32) × 5/9 + 273.15 "
    },

    "kelvin":{
        "degree celsius":"inputValue K − 273.15  ", "fahrenheit":"(inputValue K − 273.15) × 9/5 + 32 ", "kelvin":"Multiply by 1"
    },

    "kilometre":{
        "kilometre":"Multiply by 1", "metre":"Multiply by 1000", "centimetre":"Multiply by 100000",
        "milimetre":"Multiply by 1000000", "micrometre":"Multiple the length value by 1e+9", "nanometre":"Multiple the length value by 1e+12","mile":"Divided by 1.609",
        "yard":"multiply by 1094", "foot":"multiply by 3280", "inch": "Multiply by 39370"
    },
    "metre":{
        "kilometre":"Divided by 1", "metre":"Multiply by 1", "centimetre":"Multiply by 1000",
        "milimetre":"Multiply by 1000", "micrometre":"Multiple the length value by 1e+6", "nanometre":"Multiple the length value by 1e+9","mile":"Divided by 1609",
        "yard":"multiply by 1.094", "foot":"multiply by 3.280", "inch": "Multiply by 39.370"
    },

    "centimetre":{
        "kilometre":"Divided by 100000", "metre":"Divided by 100", "centimetre":"Multiply by 1",
        "milimetre":"Multiply by 10", "micrometre":"Multiple the length value by 10000", "nanometre":"Multiple the length value by 1e+7","mile":"Divided by 6.2137e-6",
        "yard":"Divided by 91.44", "foot":"Divided by 30.48", "inch": "Divided by 2.54"

    },

    "milimetre":{
        "kilometre":"Divided by 1e-6", "metre":"Divided by 1000", "centimetre":"Divided by 10",
        "milimetre":"Multiply by 1", "micrometre":"Multiple the length value by 1000", "nanometre":"Multiple the length value by 1e+6","mile":"Divided by 1.609e+6",
        "yard":"Divided by 914.4", "foot":"Divided by 304.8", "inch": "Divided by 25.4"

    },
    
    "micrometre":{
        "kilometre":"Divided by 1e+9", "metre":"Divided by 1e+6", "centimetre":"Divided by 10000",
        "milimetre":"Multiply by 1000", "micrometre":"Multiple the length value by 1", "nanometre":"Multiple the length value by 1000","mile":"Divided by 1.609e+9",
        "yard":"Divided by 914400", "foot":"Divided by 304800", "inch": "Divided by 25400"

    },

    "nanometre":{
        "kilometre":"Divided by 1e+12", "metre":"Divided by 1e+9", "centimetre":"Divided by 1e+7",
        "milimetre":"Divided by 1e+6", "micrometre":"Multiple the length value by 1000", "nanometre":"Multiple the length value by 1","mile":"Divided by 1.609e+12",
        "yard":"Divided by 9.144e+8", "foot":"Divided by 3.048e+8", "inch": "Divided by 2.54e+7"

    },

    "mile":{
        "kilometre":"Multiply by 1.609", "metre":"Multiply by 1609", "centimetre":"Multiply by 160990",
        "milimetre":"Multiply by 1.609e+6", "micrometre":"Multiply by 1.609e+9", "nanometre":"Multiply by 1.609e+12","mile":"Multiply by 1",
        "yard":"Multiply by 1760", "foot":"Multiply by 5280", "inch": "Multiply by 63360"

    },

    "yard":{
        "kilometre":"Divided by 1094", "metre":"Divided by 1.094", "centimetre":"Multiply by 91.44",
        "milimetre":"Multiply by 914.4", "micrometre":"Multiply by 914400", "nanometre":"Multiply by 9.144e+8","mile":"Divided by 1760",
        "yard":"Multiply by 1", "foot":"Multiply by 3", "inch": "Multiply by 36"

    },

    "foot":{
        "kilometre":"Divided by 3281", "metre":"Divided by 3.281", "centimetre":"Multiply by 30.48",
        "milimetre":"Multiply by 304.8", "micrometre":"Multiply by 304800", "nanometre":"Multiply by 3.048e+8","mile":"Divided by 5280",
        "yard":"Divided by 3", "foot":"Multiply by 1", "inch": "Divided by 12"

    },

    "inch":{
        "kilometre":"Divided by 39370", "metre":"Divided by 39.87", "centimetre":"Multiply by 2.54",
        "milimetre":"Multiply by 25.4", "micrometre":"Multiply by 25400", "nanometre":"Multiply by 2.54e+7","mile":"Divided by 63360",
        "yard":"Divided by 36", "foot":"Multiply by 12", "inch": "Multiply by 1"

    },


    "square kilometre":{
        "square kilometre":"Multiply by 1","square metre":"multiply the area value by 1e+6","square mile":"divide the area value by 2.59","square yard":"multiply the area value by 1.196e+6","square foot":"for an approximate result, multiply the area value by 1.076e+7","square inch":"multiply the area value by 1.55e+9","hectare":"multiply the area value by 100","acre":"for an approximate result, multiply the area value by 247.1"
    },

    "square metre":{
        "square kilometre":"Divided by 1e+6","square metre":"multiply the area value by 1","square mile":"divide the area value by 2.59e+6","square yard":"multiply the area value by 1.196","square foot":"for an approximate result, multiply the area value by 10.764","square inch":"multiply the area value by 1550","hectare":"Divided the area value by 1/10000","acre":"for an approximate result, Divided the area value by 4047"
    },


    "square mile":{
        "square kilometre":"Divided by 2.59","square metre":"multiply the area value by 2.59e+6","square mile":"Multiply the area value by 1","square yard":"multiply the area value by 3.098e+6","square foot":"for an approximate result, multiply the area value by 2.788e+7","square inch":"multiply the area value by4.014e+9","hectare":"Divided the area value by 259","acre":"for an approximate result, Divided the area value by  640"
    },

    "square yard":{
        "square kilometre":"Divided by 1.196e+6","square metre":"Divided the area value by 1.196","square mile":"Divided  the area value by 3.098e+6","square yard":"multiply the area value by 1","square foot":"for an approximate result, multiply the area value by 9","square inch":"multiply the area value by 1296","hectare":"Divided the area value by 11960","acre":"for an approximate result, Divided the area value by  4840"
    },

    "square foot":{
        "square kilometre":"Divided by 1.076e+7","square metre":"Divided the area value by 10.764","square mile":"Divided  the area value by 2.788e+7","square yard":"Divided the area value by 9","square foot":"for an approximate result, multiply the area value by 1","square inch":"multiply the area value by 144","hectare":"Divided the area value by 107600","acre":"for an approximate result, Divided the area value by 43560"
    },

    "square inch":{
        "square kilometre":"Divided by 1.55e+9","square metre":"Divided the area value by 1550","square mile":"Divided  the area value by 4.014e+9","square yard":"Divided the area value by 1296","square foot":"for an approximate result, multiply the area value by 144","square inch":"multiply the area value by 1","hectare":"Divided the area value by 1.55e+7","acre":"for an approximate result, Divided the area value by 6.273e+6"
    },

    "hectare":{
        "square kilometre":"Divided by 100","square metre":"Divided the area value by 10000","square mile":"Divided  the area value by 259","square yard":"Multiply the area value by 11960","square foot":"for an approximate result, multiply the area value by 107600","square inch":"multiply the area value by 1.55e+7","hectare":"Multiply the area value by 1","acre":"for an approximate result, Multiply the area value by 2.471"
    },


    "acre":{
        "square kilometre":"Divided by 247.1","square metre":"Multiply the area value by 4047","square mile":"Divided  the area value by 640","square yard":"Multiply the area value by 4840","square foot":"for an approximate result, multiply the area value by 43560","square inch":"multiply the area value by 6.273e+6","hectare":"Divided the area value by 2.471","acre":"for an approximate result, Multiply the area value by 1"
    },



    "cubic metre":{
        "cubic metre":"Multiply by 1","liter":"multiply the volume value by 1000", 'milliliter':"multiply the volume value by 1e+6", "cubic foot":"for an approximate result, multiply the volume value by 35.315", "cubic inch":"for an approximate result, multiply the volume value by 61020"
    },


    "liter":{
        "cubic metre":"divide the volume value by 1000","liter":"multiply the volume value by 1", 'milliliter':"multiply the volume value by 1000", "cubic foot":"or an approximate result, divide the volume value by 28.317", "cubic inch":"for an approximate result, multiply the volume value by 61.024"
    },

    "milliliter":{
        "cubic metre":"divide the volume value by 1e+6","liter":"divide the volume value by 1000", 'milliliter':"multiply the volume value by 1", "cubic foot":"for an approximate result, divide the volume value by 28320", "cubic inch":"divide the volume value by 16.387"
    },

    "cubic foot":{
        "cubic metre":"for an approximate result, divide the volume value by 35.315","liter":"for an approximate result, multiply the volume value by 28.317", 'milliliter':"for an approximate result, multiply the volume value by 28320", "cubic foot":"for an approximate result, multiply the volume value by 1", "cubic inch":"multiply the volume value by 1728"
    },
    





    
}


function convertUnits()
{

    var inputValue=parseFloat(result1.value)
    var fromUnit=unit_select1.value;
    var toUnit=unit_select2.value;
    var result
    
    if ((unitConverters[fromUnit]) && (unitConverters[fromUnit][toUnit]))
        {
            var unitConverter=unitConverters[fromUnit][toUnit];
            if (typeof unitConverter=="function")
            {
                result=unitConverter(inputValue)
            }
            else
            {
                result=unitConverter*inputValue;
            }
            
        
            result2.value=result;
        
            formula.innerHTML="Formula: "+formulaDescription[fromUnit][toUnit];
        }
    
}


unit_select1.addEventListener("change",convertUnits);
unit_select2.addEventListener("change",convertUnits);
result1.addEventListener("keyup",convertUnits);
result2.addEventListener("keyup",convertUnits);



