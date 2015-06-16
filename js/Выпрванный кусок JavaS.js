<script>

// Переменные, которые потом нужно занести в БД
  //  Харрактеристика Компьютера
  Agility_Computer=16;
  Intellect_Computer=16;
  Force_Computer=16;
  Damage_Computer=16;
  Level_Computer=1;
  Protection_Computer=16;
  Life_Computer=160;
  // Харрактеристика Игрока
  Agility_Player=16;
  Intellect_Player=16;
  Force_Player=16;
  Damage_Player=16;
  Level_Player=1;
  Protection_Player=16;
  Life_Player=160;
  // Прочие характеристики
  Total_Life=160;
  Damage=0;
  Points_Increase=0; //Очки повышения характеристик
  Coins_Player=39;
  
Zizni2=160;
Zizni=160;
TotalHP = 160;
Lovk1=16;
Fatal1=20;
Zachit=10;
LVL1=1;
LVL2=1;
Inteleckt1=16;
Sila1=16;
Uron=16;
X=0;
R=15.5;
K=15.5;

Level_Player=LVL1;

Damage=Uron;                              
Intellect=Inteleckt;                             
Agility=Lovk;                                    
Force=Sila ;                                     
level=LVL1;                                       
Protection=Zachit;                               
Life=Zizni;
Severity=Fatal; 
document.getElementById('Inscriptions_2').innerHTML =Zizni;

// Сам код

function player_attack() {
if (player_panel_attack.style.display == 'block'){ player_panel_attack.style.display = 'none'; }
else if (player_panel_attack.style.display == 'none') { player_panel_attack.style.display = 'block'; }
player_panel_magic.style.display = 'none';
player_panel_things.style.display = 'none';
player_panel_block.style.display = 'none';
};
function player_block() {
if (player_panel_block.style.display == 'block'){ player_panel_block.style.display = 'none'; }
else if (player_panel_block.style.display == 'none') { player_panel_block.style.display = 'block'; }
player_panel_attack.style.display = 'none';
player_panel_magic.style.display = 'none';
player_panel_things.style.display = 'none';
};
function player_magic() {
if (player_panel_magic.style.display == 'block'){ player_panel_magic.style.display = 'none'; }
else if (player_panel_magic.style.display == 'none') { player_panel_magic.style.display = 'block'; }
player_panel_attack.style.display = 'none';
player_panel_things.style.display = 'none';
player_panel_block.style.display = 'none';
};
function player_things() {
if (player_panel_things.style.display == 'block'){ player_panel_things.style.display = 'none'; }
else if (player_panel_things.style.display == 'none') { player_panel_things.style.display = 'block'; }
player_panel_attack.style.display = 'none';
player_panel_magic.style.display = 'none';
player_panel_block.style.display = 'none';
};
function player_panel_one() {
player_panel_main.style.display = 'none';
player_panel_attack.style.display = 'none'; 
player_panel_magic.style.display = 'none';
player_panel_things.style.display = 'none';
player_panel_block.style.display = 'none';
};
function player_panel_two() { player_panel_main.style.display = 'block'; };
    
function Damage_Computer() {
  if (100-parseInt(Agility_Computer)<Math.floor(Math.random()*(100-5+1)+5)){
     X=Math.round(((parseInt(Intellect_Computer)*parseInt(Force_Computer)*parseInt(Damage_Computer)*parseInt(Level_Computer))/(10*parseInt(Protection_Player)*parseInt(Level_Player)))+(Math.random()*(10-1+1)+1)); 
     if (100-parseInt(Severity1)<Math.floor(Math.random()*(100-5+1)+5)){
     X=parseInt(X)*2;
     };      
     if (X>Life_Player) {
     X=Life_Player;
     };        
  };
  Life_Player=parseInt(Life_Player)-parseInt(X);
};

function Damage_Player() {
  if (100-parseInt(Agility_Player)<Math.floor(Math.random()*(100-5+1)+5)){
     X=Math.round(((parseInt(Intellect_Player)*parseInt(Force_Player)*parseInt(Damage_Player)*parseInt(Level_Player))/(10*parseInt(Protection_Computer)*parseInt(Level_Computer)))+(Math.random()*(10-1+1)+1)); 
     if (100-parseInt(Severity_Player)<Math.floor(Math.random()*(100-5+1)+5)){ X=parseInt(X)*2; };      
     if (X>Life_Computer) { X=Life_Computer;  };        
  };
  Life_Computer=parseInt(Life_Computer)-parseInt(X);
}; 

function onBtnClick2() {
  if (Zizni>0) {
   Og4id.style.width = 0.5+"%";
     var intervalID = setInterval(function(){
        Og4id.style.width = (parseFloat(Og4id.style.width) + 0.05) + "%";
        if(parseFloat(Og4id.style.width) > 15.5) {
          clearInterval(intervalID);
          if (30-parseInt(Lovk1)<Math.floor(Math.random()*(100-5+1)+5)){
             X=Math.round(((parseInt(Inteleckt1)*parseInt(Sila1)*parseInt(Uron)*parseInt(LVL1))/(10*parseInt(Zachit)*parseInt(LVL2)))+(Math.random()*(10-1+1)+1)); 
             //Ниже какая то проблема скорее всего из-за этого не всегда вычитаеться до конца(Полосу жизней тоже к нулю прировнять)
             if (X>Zizni) {
               X=Zizni;
             };
             if (100-parseInt(Fatal1)<Math.floor(Math.random()*(100-5+1)+5)){ X=parseInt(X)*2; };          
          };
             document.getElementById('Inscriptions_1').innerHTML =X;
          if (X>=0) { 
              Zizni=parseInt(Zizni)-parseInt(X);
              var hpPercent = (((Zizni * 100)/TotalHP))*0.01;
              Ogid.style.width=30*hpPercent+'%';
          };
          if (Zizni<=0) {
              Zizni=0;
              Ogid.style.width=0;
              Defeat();
          };
          document.getElementById('Inscriptions_2').innerHTML =Zizni;
          onBtnClick();
        }
     }, 2);
  }
};

function onBtnClick() {
  if (Zizni>0) {
   Og4id.style.width = 0.5+"%";
     var intervalID = setInterval(function(){
        Og4id.style.width = (parseFloat(Og4id.style.width) + 0.05) + "%";
        if(parseFloat(Og4id.style.width) > 15.5) {
          clearInterval(intervalID);
          if (30-parseInt(Lovk1)<Math.floor(Math.random()*(100-5+1)+5)){
             X=Math.round(((parseInt(Inteleckt1)*parseInt(Sila1)*parseInt(Uron)*parseInt(LVL1))/(10*parseInt(Zachit)*parseInt(LVL2)))+(Math.random()*(10-1+1)+1)); 
             //Ниже какая то проблема скорее всего из-за этого не всегда вычитаеться до конца(Полосу жизней тоже к нулю прировнять)
             if (X>Zizni) { X=Zizni;  };
             if (100-parseInt(Fatal1)<Math.floor(Math.random()*(100-5+1)+5)){ X=parseInt(X)*2; };          
          };
             document.getElementById('Inscriptions_1').innerHTML =X;      // Надпись сколько урона нанесено
          if (X>=0) { 
              Zizni=parseInt(Zizni)-parseInt(X);
              var hpPercent = (((Zizni * 100)/TotalHP))*0.01;
              Ogid.style.width=30*hpPercent+'%';
          };
          if (Zizni<=0) {
              Zizni=0;
              Ogid.style.width=0;
              Defeat();
          };
          document.getElementById('Inscriptions_2').innerHTML =Zizni;
          onBtnClick();
        }
     }, 2);
  }
};

function Defeat() {
  Coins_Defeat=Math.round(5*Math.pow(1.2,((parseInt(Level_Player)-1)*0.8))*(1.03*Math.random()));
  Coins_Player=parseInt(Coins_Player)+parseInt(Coins_Defeat);
  document.getElementById('coins_defeat').innerHTML =Coins_Defeat+' ('+Coins_Player+')';
  info_defeat.style.display = 'block';
  Background.style.display = 'block'; 
};
function Experience_Player() {
  exp=5-(parseInt(level)-parseInt(level2));
  if (parseInt(exp)>=0) {
  Experience_Player=(0,2*parseInt(exp))*(parseInt(rise)/q);
  };
};
function Level_Rise() {
  if (parseInt(experience)>parseInt(rise)) {
   experience=parseInt(experience)-parseInt(rise);
   Level_Player=parseInt(Level_Player)+1;
   Coins_Level_Rise=Math.round(500*Math.pow(1.2,((parseInt(Level_Player)-1)*0.8))*(1.03*Math.random()));
   document.getElementById('coins_level_rise').innerHTML =Coins_Level_Rise;
   Points_Increase=parseInt(Points_Increase)+2;
   document.getElementById('points_level_rise').innerHTML ='+2 ('+Points_Increase+')';
   Background.style.display = 'block';
   info_level_rise.style.display = 'block';
  };
};    
</script>