// Переменные, которые потом нужно занести в БД
  //  Харрактеристика Компьютера
  Agility_Computer=16;                      // Ловкость 
  Intellect_Computer=16;                   //  Интелект
  Force_Computer=16;                     //   Сила
  Damage_Computer=16;                //   Урон
  Level_Computer=1;                       //   Уровень
  Protection_Computer=16;             //   Защита                      
  Severity_Player=16;                     //    Точность
  Life_Computer=160;                     //    Жизни
  // Харрактеристика Игрока
  Agility_Player=16;                         //
  Intellect_Player=16;                      //
  Force_Player=16;                         //
  Damage_Player=16;                     //
  Level_Player=1;                            //
  Protection_Player=16;                 //
  Life_Player=160;                          //
  // Прочие характеристики
  Total_Life=160;                             //    Полные жизни
  Damage_Player_Fight=0;             //    Урон
  Coins_Player=500;                       //    Монеты
  Points_Increase=0;                      //    Проверить то ли это значение *
  Experience_Player=0;                  //    Опыт персонажа   
  AAPA=0;                                      // Эти величины изменятся в зависимости от 
  AAPS=0;                                     //  того, куда вы атакуете врага

function Head() { AAPA=0.5; AAPS=1.5; Damage_P(); };

function Body() { AAPA=1; AAPS=1; Damage_P() };

function Feet() { AAPA=1.5; AAPS=0.5; Damage_P(); }; 
  
function Expectation() {
  if (Life_Computer>0) {
     f0003.style.width = 0.5+"%";
     var intervalID = setInterval(function(){
          f0003.style.width = (parseFloat(f0003.style.width) + 0.05) + "%";
          if(parseFloat(f0003.style.width) > 15.5) {
                clearInterval(intervalID);
                Player_Panel_One();
          };
     }, 28);
  };
};

function Damage_P() {
  if (30-parseInt(Agility_Player)<Math.floor(Math.random()*(100-5+1)+5)){
    Damage_Player_Fight=Math.round(((parseInt(Intellect_Player)*parseInt(Force_Player)*parseInt(Damage_Player)*parseInt(Level_Player))/(10*parseInt(Protection_Computer)*parseInt(Level_Computer)))+(Math.random()*(10-1+1)+1)); 
    if (100-parseInt(Severity_Player)<Math.floor(Math.random()*(100-5+1)+5)) { 
        Damage_Player_Fight=parseInt(Damage_Player_Fight)*2; 
    };      
    if (Damage_Player_Fight>Life_Computer) { 
        Damage_Player_Fight=Life_Computer;  
    }; 
    document.getElementById('inscriptions_damage_player').innerHTML =Damage_Player_Fight;
    if (Damage_Player_Fight>=0) { 
        Life_Computer=parseInt(Life_Computer)-parseInt(Damage_Player_Fight);
        var Life_Percent = ((Life_Computer * 100)/Total_Life)*0.01;
        f0004.style.width=30*Life_Percent+'%';
    };
    if (Life_Computer<=0) {
        Life_Computer=0;
        f0004.style.width=0;
        Victory();
    };
    document.getElementById('inscriptions_life_computer').innerHTML =Life_Computer;
  } else {
  document.getElementById('inscriptions_damage_player').innerHTML ='Мимо';
  }
  Expectation();  
  Player_Panel_One();
};

function Damage_C() {
  if (Life_Player>0) {
    f0001.style.width = 0.5+"%";
    var intervalID = setInterval(function(){
       f0001.style.width = (parseFloat(f0001.style.width) + 0.05) + "%";
       if(parseFloat(f0001.style.width) > 15.5) {
            
          if (30-parseInt(Agility_Computer)<Math.floor(Math.random()*(100-5+1)+5)){
              Damage_Computer_Fight=Math.round(((parseInt(Intellect_Computer)*parseInt(Force_Computer)*parseInt(Damage_Computer)*parseInt(Level_Computer))/(10*parseInt(Protection_Player)*parseInt(Level_Player)))+(Math.random()*(10-1+1)+1)); 
              if (100-parseInt(Severity_Computer)<Math.floor(Math.random()*(100-5+1)+5)){ 
                  Damage_Computer_Fight=parseInt(Damage_Computer_Fight)*2; 
              };      
              if (Damage_Computer_Fight>Life_Player) { 
                  Damage_Computer_Fight=Life_Player;  
              };
          }; 
          Damage();      
          if (Damage_Computer_Fight>=0) { 
              Life_Player=Life_Player-Damage_Computer_Fight;
              var Life_Percent = ((Life_Player * 100)/Total_Life)*0.01;
              f0002.style.width=30*Life_Percent+'%';
          };
          if (Life_Player<=0) {
              Life_Player=0;
              f0002.style.width=0;
              Defeat();
          };
         document.getElementById('inscriptions_life_player').innerHTML =Life_Player;
         Damage_C();
         clearInterval(intervalID); 
       }
    }, 30);
    Damage();
  }
};

function Player_Panel_One() {
if (player_panel_main.style.display == 'block'){ player_panel_main.style.display = 'none'; }
    else { player_panel_main.style.display = 'block'; }
player_panel_attack.style.display = 'none'; 
player_panel_magic.style.display = 'none';
player_panel_things.style.display = 'none';
player_panel_block.style.display = 'none';
};

function Victory() {
  Differense_Level=5-(Level_Player-Level_Computer);
  if (Differense_Level>=0) {
    Coins_Victory=(0.4*Differense_Level)*(30*Math.pow(1.15,parseInt(Level_Player)-1));
    Coins_Player=parseInt(Coins_Player)+parseInt(Coins_Victory);
    document.getElementById('coins_victory').innerHTML =Coins_Victory+' ('+Coins_Player+')'; 
    Experience_Victory=(0,2*parseInt(Differense_Level))*((Total_Life*Math.pow(1.4,(Level_Player-1)))/(5*Math.pow(1.07,(Level_Player-1))));
    Experience_Player=Experience_Player+Experience_Victory;
    document.getElementById('experience_victory').innerHTML =Experience_Victory+' ('+Experience_Player+')';     
    Level_Rise_Player=Math.pow(100,1.55)*Math.pow(2.2,(Level_Player-1)*0.14); 
    if (Experience_Player>Level_Rise_Player) {
      Level_Rise();
    };
  } 
    else { document.getElementById('coins_victory').innerHTML ='Ваш уровень превышает уровень противника на 5!'; }
  info_victory.style.display = 'block';
  Background.style.display = 'block'; 
};

function Defeat() {
  Differense_Level=5-(Level_Player-Level_Computer);
  if (Differense_Level>=0) {
    if (Damage_Player_Fight>(0.05*Total_Life)) {
      Coins_Defeat=(0.4*Differense_Level)*(3*Math.pow(1.15,parseInt(Level_Player)-1));
      Coins_Player=parseInt(Coins_Player)+parseInt(Coins_Defeat);
      document.getElementById('coins_defeat').innerHTML =Coins_Defeat+' ('+Coins_Player+')'; 
    }
       else { document.getElementById('coins_defeat').innerHTML ='Вы нанесли менее 5% урона!'; };
  }
     else { document.getElementById('coins_defeat').innerHTML ='Ваш уровень превышает уровень противника на 5!'; };                                   
  
  info_defeat.style.display = 'block';                                                                                                                               
  Background.style.display = 'block'; 
};                                                                                                                                          
                                                                                                                                                 
function Level_Rise() {                                                                                                           
   Experience_Player=Experience_Player-Level_Rise_Player;
   Coins_Level_Rise=Math.round(500*Math.pow(1.2,((parseInt(Level_Player)-1)*0.8))*(1.03*Math.random()));
   Level_Player=parseInt(Level_Player)+1;
   Life_Player=Life_Player+((300*Math.pow(1.04,(Level_Player-1)))-(300*Math.pow(1.04,(Level_Player-2))));
   document.getElementById('coins_level_rise').innerHTML =Coins_Level_Rise;
   Points_Increase=parseInt(Points_Increase)+2;
   document.getElementById('points_level_rise').innerHTML ='+2 ('+Points_Increase+')';
   Background.style.display = 'block';
   info_level_rise.style.display = 'block';
};

function player_attack() {
if (player_panel_attack.style.display == 'block'){ player_panel_attack.style.display = 'none'; }
else if (player_panel_attack.style.display == 'none') { player_panel_attack.style.display = 'block'; }
player_panel_magic.style.display = 'none';
player_panel_things.style.display = 'none';
player_panel_block.style.display = 'none';
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

function Damage() {
  inscriptions_damage_computer.style.display = 'block';
  document.getElementById('inscriptions_damage_computer').innerHTML =Damage_Computer_Fight;
  inscriptions_damage_computer.style.top=70+"%";
  inscriptions_damage_computer.style.opacity=1;
  var intID = setInterval(function(){
  inscriptions_damage_computer.style.top = (parseFloat(inscriptions_damage_computer.style.top) - 0.2) + "%";
  inscriptions_damage_computer.style.opacity = parseFloat(inscriptions_damage_computer.style.opacity) - 0.01;
  if (parseFloat(inscriptions_damage_computer.style.opacity)==0) {
    clearInterval(intID);
    inscriptions_damage_computer.style.display = 'none';
    inscriptions_damage_computer.style.opacity=1;                                                                  
    inscriptions_damage_computer.style.top=80+"%"; 
  };    
  }, 30);
};

function Start_Fight() {
Timer=3;
timer.style.display = 'block';
start_button.style.display = 'none';
document.getElementById('inscriptions_life_player').innerHTML =Life_Player;
document.getElementById('inscriptions_life_computer').innerHTML =Life_Computer;
document.getElementById('timer').innerHTML ='Бой начнеться через:<br>'+Timer;
var intervalID = setInterval(function(){
Timer=Timer-1;   
document.getElementById('timer').innerHTML ='Бой начнеться через:<br>'+Timer;
if (Timer==0) {
  player_panel_main.style.display = 'none';
  timer.style.display = 'none';
  Background.style.display = 'none';
  Expectation();
  Damage_C();
  clearInterval(intervalID);  
};
}, 1000);
};

function Restart() {
Damage_Player_Fight=0;
Damage_Computer_Fight=0;
f0002.style.width=30+'%';
f0004.style.width=30+'%';
inscriptions_damage_computer.style.display = 'none';
inscriptions_damage_player.style.display = 'none';
info_victory.style.display = 'none';
info_defeat.style.display = 'none';
Life_Player=160;                    // Потом сделать = Total_Life ну или же лучше = формула жизней
Life_Computer=160;                                                                                                                               
Start_Fight();
};
