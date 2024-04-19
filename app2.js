// Define the enneagram types as key-value pairs
const enneagramTypes = {
  1: { name: "ප්‍රතිසංස්කරණ වාදියා ", description: "ප්‍රතිපත්තිගරුක, අරමුණු සහිත, ස්වයං පාලනයක් සහ පරිපූර්ණත්වය. ඔවුන්ට හරි වැරැද්ද පිළිබඳ දැඩි හැඟීමක් ඇත." },
  2: { name: "උදව් කරන්නා ", description: "ත්‍යාගශීලී, සැලකිලිමත්, උණුසුම් සහ මිනිසුන්ට ප්‍රසන්න. ඔවුන් අන් අයගෙන් අගය කිරීම ලබන්නට  හා සමීප වීමට ආශා කරයි." },
  3: { name: "සාර්ථකත්වය හඹා යන්නා ", description: "සාර්ථකත්වයට නැඹුරු වූ, තමන්ගේ ප්‍රතිරූපය ගැන සිතන , කාර්යක්ෂම සහ අනුවර්තනය වියහැකි. ඔවුන්ගේ ජයග්‍රහණ අගය කිරීම ඔවුන්ගේ අරමුණයි." },
  4: { name: "කලාකරුවා ", description: "නිර්මාණශීලී, ප්‍රත්‍යවේක්ෂක , ස්වයං ප්‍රකාශක  සහ හැඟීම්බර. ඔවුන් අද්විතීය වීමට සහ ඔවුන්ගේ සැබෑ ස්වභාවය තේරුම් ගැනීමට ආශා කරයි." },
  5: { name: "සිතන්නා ", description: "විශ්ලේෂණාත්මක, වෙන් වූ, පුද්ගලික සහ නව්‍ය. ඔවුන් මෙහෙයවනු ලබන්නේ නිපුණතා අවබෝධ කර ගැනීමේ සහ දැනීමේ අවශ්‍යතාවය මගිනි." },
  6: { name: "පක්ෂපාතී පුද්ගලයා ", description: "නිරත වීම, වගකිවයුතු, ප්‍රශ්න කිරීම සහ ආරක්ෂාව සෙවීම. අන්ධ ලෙස අන්‍යයන්ව විශ්වාස කිරීමට ඔවුන්ට අපහසුය" },
  7: { name: "සතුට හඹා යන්නා ", description: "ස්වයංසිද්ධ, වික්‍රමාන්විත, පහසුවෙන් අවධානය වෙනතකට යොමු කළ හැකි සහ ශුභවාදී. ඔවුන් වේදනාව වළක්වා ගැනීම සඳහා බොහෝ අවශ්යතා අනුගමනය කරයි.." },
  8: { name: "අභියෝග කරන්නා ", description: "ගැටුම්කාරී, ආරක්‍ෂාකාරී, බිය ගන්වන, සහ හිස ශක්තිමත්. ඔවුන් ස්වාධීනව හා පාලනය කිරීමට උත්සාහ කරයි.." },
  9: { name: "සාමයේ දූතයා ", description: "පහසු, පැත්තකට වී සිටින, තෘප්තිමත්, සහ ගැටුම් මඟහරවා ගැනීම. සාමය රැකීමේ ගැඹුරු අවශ්‍යතාවක් ඔවුන්ට තිබේ."},
  
  // Add more enneagram types here...
};

// Define the quiz questions as an array of objects
const quizQuestions = [
  
  { question: "මම ඕනෑවට වඩා විවේචනාත්මක හා විනිශ්චය කරන  බව මිනිසුන් මට පවසා ඇත.", enneagramType:1},
  {question: "මම සැහැල්ලුව  සිටීමට  උත්සාහ කරන විට මට සුවපහසුවක් දැනෙන්නේ නැත. ඒ කරන්නට බොහෝ දේ තිබෙන බැවිනි", enneagramType: 1},
  {question: "මිනිසුන් නීති රීති නොසලකා හරින විට හෝ කඩ කරන විට,  මම එයට කැමති නැත", enneagramType: 1},
  {question: "විස්තර මට වැදගත්", enneagramType: 1},
  {question: " මම බොහෝ විට මා අන් අය සමඟ සංසන්දනය කරන බව මට පෙනී යයි",enneagramType: 1},
  {question: "මම ඒක කරන්නම් කිව්වොත්, මම ඒක කරනවාමයි", enneagramType: 1},
  {question: "අමනාපය අත්හැරීම මට අමාරුයි", enneagramType: 1},
  {question: "මම පැමිණියාට වඩා හොඳින් ලෝකය තබා එය  හැර යාම මගේ වගකීමයි.", enneagramType: 1},
  {question: "මට බොහෝ ස්වයං විනයක් ඇත", enneagramType: 1},
  {question: "මම මුදල් වියදම් කරන ආකාරය ගැන කල්පනාකාරී හා කල්පනාකාරීව සිටීමට උත්සාහ කරමි", enneagramType: 1},
  {question: "දේවල් හරි හෝ වැරදි බව මට පෙනේ", enneagramType: 1},
  {question: " මම වඩා හොඳ පුද්ගලයෙක් වන්නේ කෙසේද යන්න ගැන සිතමින් බොහෝ කාලයක් ගත කරමි", enneagramType: 1},
  {question: "සමාව දීම මට අමාරුයි",   enneagramType: 1},   
  {question: " දේවල් වැරදි හෝ අදාල තැනින් වෙනස් වූ විට එය මම වහාම දකිමි", enneagramType: 1  },
  {question: " මම ගොඩක් කරදර වෙනවා",   enneagramType: 1},
  {question: "අනෙක් අය ඔවුන්ගේ කොටස නොකරන විට මම ඇත්තටම කලකිරෙනවා", enneagramType: 1},
  {question: "මම අනුපිලිවෙලට (routine) කැමති අතර වෙනස්වීම් පහසුවෙන් වැලඳ නොගනිමි", enneagramType: 1},   
  {question: "ව්‍යාපෘතියක වැඩ කරන විට මම මගේ උපරිමය කරන අතර අනෙක් අයද එසේ කරයි නම් මම කැමතියි,ඒ නිසා මට ඔවුන්ගේ වැඩ නැවත කිරීමට සිදු නොවේ", enneagramType: 1},
  {question: "ව්‍යාපෘතියක වැඩ කරන විට මම මගේ උපරිමය කරන අතර අනෙක් අයද එසේ කරයි නම් මම කැමතියි,ඒ නිසා මට ඔවුන්ගේ වැඩ නැවත කිරීමට සිදු නොවේ", enneagramType: 1},
  
  {question: " ජයග්‍රාහකයෙකු ලෙස පැමිණීම මට වැදගත් වේ.",enneagramType: 3},   
  {question: " මම කාමරයකට ඇතුල් වන විටම එහි ජනතාවට ප්‍රබල හැඟීමක් දනවන්නට කැමති..",enneagramType: 3},
  {question: " මට Mac එකක් මිලදී ගැනීමට Bill Gates පොළඹවා ගත හැකිය",enneagramType: 3},        
  {question: " මගේ සතුට සඳහා යතුරු වන්නේ කාර්යක්ෂමතාව, ඵලදායිතාවය සහ පැවැත්මයි",enneagramType: 3},      
  {question: " මිනිසුන් මාව මන්දගාමී කරන විට මම එයට කැමති නැත",enneagramType: 3},        
  {question: " අසාර්ථක දෙයක් වුවද සාර්ථක ලෙස පිංතාරු කර මවාපාන්නට මට පුළුවනි",enneagramType: 3},       
  {question: " මම ඕනෑම දවසක අනුගමනය කරනවාට වඩා නායකත්වය දීමට කැමැත්තෙමි..",enneagramType: 3},      
  {question: " මම වරදකට තරඟකාරී වෙමි",enneagramType: 3},     
  {question: " මට ඕනෑම කෙනෙකු සමඟ සම්බන්ධ වීමට සහ ජයග්‍රහණය කිරීමට ක්‍රමයක් සොයාගත හැකිය..",enneagramType: 3},       
  {question: " මම ලෝක ශූර බහුකාර්යයෙකි",enneagramType: 3},     
  {question: " මේ මොහොතේ මිනිසුන් මට ප්‍රතිචාර දක්වන ආකාරය පිළිබඳව මම සමීපව නිරීක්ෂණය කරමි.",enneagramType: 3},
  {question: " නිවාඩුවට වැඩ නොකර ඉන්න එක මට අමාරුයි.",enneagramType: 3},
  {question: " මගේ හැඟීම් නම් කිරීමට හෝ  ඒවාට ප්‍රවේශ වීමට මට අපහසුයි.",enneagramType: 3}, 
  {question: " මම මගේ පෞද්ගලික ජීවිතය ගැන වැඩිය කතා කරන කෙනෙක් නෙවෙයි.",enneagramType: 3},       
  {question: " සමහර වෙලාවට මට හැඟෙන්නේ මම මහාබොරුකාරයෙක් වගේ.",enneagramType: 3},
  {question: " මැනිය හැකි ඉලක්ක තැබීමට සහ ඉටු කිරීමට මම කැමතියි",enneagramType: 3},
  {question: " මගේ හැඟීම් නම් කිරීමට හෝ  ඒවාට ප්‍රවේශ වීමට මට අපහසුයි.",enneagramType: 3}, 
  {question: " මම මගේ පෞද්ගලික ජීවිතය ගැන වැඩිය කතා කරන කෙනෙක් නෙවෙයි.",enneagramType: 3},       
  {question: " සමහර වෙලාවට මට හැඟෙන්නේ මම මහාබොරුකාරයෙක් වගේ.",enneagramType: 3},
  

  {question: " කෙනෙක් උදව්වක් ඉල්ලන කොට බෑ කියන්නෙ කොහොමද කියලා මම දන්නේ නෑ.", enneagramType: 2},
  {question: " මම විශිෂ්ට සවන්දෙන්නෙක් වන අතර, මිනිසුන්ගේ ජීවිත සකස් කරන කථා මට මතකයි.", enneagramType: 2 },    
  {question: " සම්බන්ධතාවයක වැරදි වැටහීම් මඟහරවා ගැනීමට මම උනන්දු වෙමි.",enneagramType: 2},
  {question: " බලගතු හෝ බලවත් පුද්ගලයන් වෙත මා ඇදී යන බවක් දැනේ",enneagramType: 2},     
  {question: " මම සාමාන්‍යයෙන් අනිත් අයට අවශ්‍ය දේ මොනවාදැයි දන්න නිසා මිනිසුන් සිතන්නේ මට යම් අධිමානසික බලයක් ඇති බවයි ",enneagramType: 2},
  {question: " මම හොඳින් නොදන්නා අය පවා ඔවුන්ගේ ජීවිත පිළිබඳ ගැඹුරු දේවල් මා සමඟ බෙදා ගනී..",enneagramType: 2},
  {question: " මට ආදරය කරන අය මට අවශ්‍ය දේ දැනගෙන සිටිය යුතුය.",enneagramType: 2},
  {question: " මගේ උදව්ව පිළිගත යුතුය. මගේ උදවුව නිසා මා  අගය කරනු ලැබිය යුතුය.",enneagramType: 2},
  {question: " මට ලැබීමට වඩා දීම පහසුයි.",enneagramType: 2},     
  {question: " මම මගේ නිවස පවුලේ අයට සහ අන් අයට ආරක්ෂිත සහ පිළිගැනීමේ ස්ථානයක් ලෙස දැනෙනවාටකැමතියි.",enneagramType: 2},
  {question: " මිනිසුන් මා ගැන සිතන දේ ගැන මම ඉතා සැලකිලිමත් වෙමි..",enneagramType: 2},       
  {question: " මම ආදරය නොකළත්, මම හැමෝටම ආදරෙයි කියලා අනිත් අය හිතනවාට මට අවශ්‍යයි.",enneagramType: 2},     
  {question: " මට ආදරය කරන අය මා වෙනුවෙන් අනපේක්ෂිත දෙයක් කරන විට මම එයට කැමතියි..",enneagramType: 2},
  {question: " බොහෝ අය මගෙන් උපකාර ඉල්ලා සිටින අතර, එය නිසා මට වටිනා බවක් දැනේ..",enneagramType: 2},
  {question: " මට අවශ්‍ය කුමක්දැයි මිනිසුන් මගෙන් විමසූ විට, පිළිතුරු දීමට මට අදහසක් නැත- මට එයට එකවර පිළිතුරු දීමට නොහැක",enneagramType: 2},
  {question: " මම වෙහෙසට පත් වූ විට, මිනිසුන් මාව සුළු කොට සලකන බව මට බොහෝ විට හැඟේ..", enneagramType: 2},
  {question: " මිනිසුන් පවසන්නේ මගේ චිත්තවේගයන් ඉහටත් උඩින් දැනෙන බවයි",enneagramType: 2},
  {question: " මගේ අවශ්‍යතා අන් අය සමඟ ගැටෙන විට මට කෝපයක් සහ ගැටුම්කාරී බවක් දැනේ.",enneagramType: 2},   
  {question: " සමහර විට මට චිත්‍රපට නැරඹීමට අපහසු වේ, මන්ද මට මිනිස්සු දුක් විදිනවා දැකීම දරාගන්න බෑ.",enneagramType: 2},

  {question: " මම නිර්මාණශීලී වන අතර ජීවිතය ගැන කලාත්මක දැක්මක් ඇත්තෙමි",enneagramType: 4 },   
  {question: " මට විටක මා අනිත් අයගෙන් වෙනස් යයි හැඟේ",enneagramType: 4},
  {question: " මා දන්නා ගොඩ්ක් අයට වඩා මලානික හැඟීමක් අත්දකින්නට පෙළඹෙමි.",enneagramType: 4},
  {question: " අතිශයින් සංවේදීව සිටීමට පෙළඹෙමි.",enneagramType: 4},
  {question: " මගේ ජීවිතයේ යම් අඩුවක් ඇති බව මට හැඟෙයි .",enneagramType: 4},
  {question: " වෙලාවකට මට අනිත් අයගේ සම්බන්ධතා ජීවන විලාසය හා ජයග්‍රහණයන් ගරන ඊර්ෂ්‍යා සිතෙයි.",enneagramType: 4},
  {question: " මගේ නිර්මාණශීලීත්වය ප්‍රකාශ කල හැකි පරිසරයන් තුල මම වර්ධනය වෙමි .",enneagramType: 4},      
  {question: " මාව වරදවා වටහා ගත්තොත් මම මගේ වැඩක් බලාගෙන පැත්තකට වෙමි සහ / හෝ විප්ලවකාරී වෙමි.",enneagramType: 4}, 
  {question: " ආදරණීය වන්නට පෙළඹෙමි මගේ ජීවිතයට ප්‍රබල ආදරයක් පැමිණෙන තෙක් බලා සිටිමි .",enneagramType: 4},        
  {question: " ආදරය සහ පරිකල්පනය පිරුණු සිහින ලෝකයක සිටින්නට මම කැමතියි  .",enneagramType: 4},
  {question: " අන් කිසිවෙකුට නොමැති අලංකාර, පිරිපහදු කළ, අද්විතීය දේවල් භුක්ති විඳින්න කැමැත්තෙමි ",enneagramType: 4},
  {question: " තීව්‍ර හා සාමාන්‍ය නොවන දෙයට ආකර්ෂණය වෙමි.",enneagramType: 4},        
  {question: " ආතතියෙන් ඉන්න විට මම මා තුලටම ගිලිලා මූඩ් ගහලා පැත්තකට වෙලා සිටිමි  .",enneagramType: 4},
  {question: " ආතතියට පත් නොවන විට දයානුකම්පිත, ස්වයං ප්‍රකාශිත  සහ සහාය වීමට නැඹුරු වන්නෙමි .",enneagramType: 4},
  {question: " පුංචිම විවේචනයකිනුත් මා තදින් තුවාල විය හැකිය .",enneagramType: 4},
  {question: " අද්විතීය වීමට උත්සාහ කරන්න සහ සාමාන්‍ය වීම වළක්වා ගැනීමට දේවල් කර ඇත්තෙමි .",enneagramType: 4},
  {question: " ආචාර විධි සහ හොඳ රසය මට අතිශයින් වැදගත් ය. ",enneagramType: 4},
  {question: " මිනිස්සු කියන්නේ මම ඕනවට වඩා රඟනවා කියාය.",enneagramType: 4},
  {question: " මගේ සහ අනිත් මිනිස්සුන්ගේ හැඟීම් තේරුම් ගැනීම වැදගත් බව මම විශ්වාස කරමි.",enneagramType: 4},

  {question: " මිනිස්සු නාස්ති කාරයෝ ඒ නිසා මම මගේ දේවල් පරිස්සම් කරගන්න ඕන.",enneagramType: 5},
  {question: " කන්කරච්චල්කාර හැඟීම්බර මිනිස්සු ළඟ මට හරි අපහසුවක් දැනෙයි  .",enneagramType: 5},
  {question: " මම බුද්ධියට තැනත් දෙන්නට කැමැත්තෙමි.",enneagramType: 5},       
  {question: " තොරතුරු එකතු කිරීමෙන් සහ කරුණු විශ්ලේෂණය කිරීමට කැමැත්තෙමි .",enneagramType: 5},       
  {question: " මට මාවම බලාගන්න පුළුවන්, අනිත් අයටත් එහෙම කරන්න පුළුවන් කියලා මම හිතනවා.",enneagramType: 5},
  {question: " මම හැම විටම ශබ්ද නඟා දේවල් නොකියමි, නමුත් මගේ හිස තුළ, මම ඉතා උපහාසාත්මක සහනරුම සිතුවිලි ඇත්තෙමි.",enneagramType: 5},
  {question: " මට බොහෝ විට අන් අය වටා අපහසුතාවයක් දැනේ.",enneagramType: 5},
  {question: " මිනිසුන් මා ගැන නිශ්චිත ප්‍රශ්න කිහිපයක් මගෙන් ඇසුවොත් මම කමක් නැත, නමුත් මිනිසුන් මා ගැන ඕනෑවට වඩා ප්‍රශ්න අසන විට මම එයට කැමති නැත.",enneagramType: 5},       
  {question: " මට තනියම කාලය අවශ්‍යයි..",enneagramType: 5},   
  {question: " මට හැඟෙන ආකාරය මිනිසුන්ට දැන ගැනීමට අවශ්‍ය නම් මම ඔවුන්ට කියන්නම්. නමුත් ඔවුන් එසේ අසන්නට එපා යැයි මම ප්‍රාර්ථනා කරමි..",enneagramType: 5},
  {question: " මම හිතන්නේ හැඟීම් වලට වඩා සිතුවිලි විශ්වාසදායකයි.",enneagramType: 5},
   {question: " බොහෝ විට, මම සහභාගී වීමට වඩා නිරීක්ෂණය කිරීමට කැමැත්තෙමි..",enneagramType: 5},
  {question: " මට මාව විශ්වාසයි. ඒ කියන්නේ මම ටික වෙලාවක් දේවල් ගැන හිතලා මම මගේම තීරණ අරගන්නවා .",enneagramType: 5},
  {question: " මිනිසුන් හුදෙක් hangout සඳහා එකතු වන්නේ මන්දැයි මට තේරුම් ගත නොහැක..",enneagramType: 5},
  {question: " මම සවන්දෙන්නෙක්.",enneagramType: 5},       
  {question: " මම මගේ කාලය හා ශක්තිය ගැන ඉතා සැලකිලිමත් විය යුතුයි..",enneagramType: 5},
  {question: " මට වැඩි කාලයක් මිනිසුන් සමඟ සිටීමට සිදු වූ විට මම වෙහෙසට පත් වෙමි..",enneagramType: 5},      
  {question: " ළමා කාලයේ මට නොපෙනෙන බවක් දැනුනි. සමහර විට වැඩිහිටියෙකු ලෙස මම නොපෙනී සිටීමට තෝරා ගනිමි..",enneagramType: 5},
  {question: " සමහර විට මම වඩාත් ත්යාගශීලී විය යුතු යැයි සිතමි. එය මට අමාරුයි.",enneagramType: 5},
  
		{question: " අන් අය ගැන සැක කරමි  සහ ඔවුන්ගේ චේතනාවන් ගැන පුදුම වෙමි .",enneagramType: 6},
    	{question: " මම විශාල සමාජ රැස්වීම් වලට කැමති නැහැ. මම කීප දෙනෙක් එක්ක ඉන්න කැමතියි.",enneagramType: 6},
    	{question: " තනියම තීරණ ගැනීමට සිදු වීම  මට කනස්සල්ලට හේතු විය හැක..",enneagramType: 6},
    	{question: " ආරක්ෂාව සහ සුරක්ෂිත භාවය  මගේ ජීවිතයේ ප්‍රමුඛතා වේ..",enneagramType: 6},
    	{question: " මා පිළිබඳව මගේම තීරණ සහ අදහස් ගැන සැක කරමි .",enneagramType: 6 },
    	{question: " මිනිසුන් වෙනත් පුද්ගලයින් සමඟ සිටීම හෝ කණ්ඩායමකට අයත් වීම හෝ වැදගත් බව විශ්වාස කරමි ",enneagramType: 6},
    	{question: " සෑම දෙයක්ම හොඳින් සිදුවේ යන විශ්වාසය මම අගයන නමුත් ඒ විශ්වාසය මම සැමවිටම අදහන්නේ නැත .",enneagramType: 6},
    	{question: " මිතුරන් සහ පවුලේ අය ජීවිතයට අවශ්‍ය යැයි මට හැඟෙන සහයෝගය ලබා දෙයි.",enneagramType: 6},
    	{question: " මම නිවැරදි තීරණයක් ගෙන ඇති බවට සහතික වීම සැමවිටම පාහේ කළ නොහැක්කකි.",enneagramType: 6},
    	{question: " මගේ ජීවිතයේ බොහෝ තේරීම් වලට බිය හේතු වී ඇති බව මම දනිමි..",enneagramType: 6},
    	{question: " මම අනපේක්ෂිත තත්වයන් තුළ සිතීමට කැමති නැත.",enneagramType: 6},
    	{question: " මා කනස්සල්ලට පත්වන දේවල් ගැන සිතීම නැවැත්වීම මට අපහසුය.",enneagramType: 6},
    	{question: " මම සාමාන්‍යයෙන් අන්තයන් සමඟ සැපපහසු නොවෙමි..",enneagramType: 6},
    	{question: " මට සාමාන්‍යයෙන් කරන්න ගොඩක් දේවල් තියෙනවා මට වැඩ ඉවර කරන්න අමාරුයි.",enneagramType: 6},
    	{question: " මම වැනිම බොහෝ සෙයින් සිටින අය අසල සිටින විට මම වඩාත් සුවපහසුයි",enneagramType: 6},
    	{question: " මම ආරම්භ කිරීමට ප්‍රමාද වන අතර, මම ආරම්භ කළ පසු,වැරදිය හැකි අවස්ථා ගැන දිගටම සිතන බව බව මට පෙනී යයි",enneagramType: 6},              
		{question: " මට ඕනෑවට වඩා ප්‍රශංසා කරන පුද්ගලයින් මම විශ්වාස නොකරමි..",enneagramType: 6},   
    	{question: " දේවල් යම් ආකාරයක පිළිවෙළකට තිබීම වැඩකදී මට ලොකු උදව්වකි",enneagramType: 6},
    	{question: " කෙනෙකුව විශ්වාස කිරීමට මම ඒ කෙනා ගැන ගොඩාක් කල් දැනගන සිටිය යුතුයි",enneagramType: 6},

    	{question: " මම හරි සතුටින් සහ ජීවයෙන් යුතුව සිටින කෙනෙක්.වෙලොවකට මාව පාලනය කිරීම අපහසුයි",enneagramType: 7},  
    	{question: " මම හැමවිටම අවසාන මොහොතේ ත්‍රාසජනක ගමනක් සඳහා ඉදිරිපත් වන පළමු පුද්ගලයා වෙමි.",enneagramType: 7},
        {question: " මම වැරදි දකින විට ශුභවාදී වෙමි..",enneagramType: 7},
        {question: " දේවල් සඳහා දැඩි හා වේගවත් කැපවීම් කිරීමට මම කැමති නැත.",enneagramType: 7},
        {question: " මම යහපත් දේවල් මගහැරී එයා මේ බියෙන් පීඩා විඳිමි ",enneagramType: 7},
        {question: " අපේක්ෂාව ජීවිතයේ හොඳම කොටසයි..",enneagramType: 7},
        {question: " මට වාද විවාද කරන්න පුළුවන්, උසස් විදිහට රඟපාන්න පුළුවන් කියලා මට සමීප අය කියනවා.",enneagramType: 7},
        {question: " විවිධත්වය සහ ස්වයංසිද්ධතාවය ජීවිතයරස ගන්වන කුළුබඩු වේ",enneagramType: 7},
        {question: " සමහර විට මම අනාගතය සඳහා ඉතා ආශාවෙන් සිටිමි, එය මෙහි පැමිණෙන තෙක් මට බලා සිටිය නොහැක.",enneagramType: 7},
        {question: " මට දේවල් ඉවර කරන්න අමාරුයි. මම ව්‍යාපෘතියක අවසානයට ළං වූ විට ඊළඟ දේ ගැන සිතමින් උද්යෝගිමත් වීම වෙන දෙයක් පටන් ගනිමි.",enneagramType: 7},
        {question: " මම සාමාන්‍යයෙන් බර සංවාද සහ ගැටුම් වලින් වැළකී සිටිමි.",enneagramType: 7},
        {question: " මා ගැන සැලකිල්ලක් දක්වන පුද්ගලයින්ට දුෂ්කර කාලයක් ඇති විට, මම ඔවුන්ට දීප්තිමත් පැත්ත බැලීමට උද.",enneagramType: 7},
        {question: " අනෙක් අය සිතන්නේ මට මා ගැන විශ්වාසයි කියාය, නමුත් මට බොහෝ සැකයන් ඇත..",enneagramType: 7},
        {question: " මම ජනප්‍රියයි සහ මිතුරන් ගොඩක් ඉන්නවා.",enneagramType: 7},
        {question: " බොහෝ කාලයක් තිස්සේ දේවල් ඉතා බරපතල වන විට, මමබොහෝ විට විහිළු සහ හාස්‍යජනක කතා කියමින්මිනිසුන් සැහැල්ලු කිරීමට ක්‍රමයක් සොයා ගනිමි",enneagramType: 7},
        {question: " මම අවසානයට කැමති නැත, එබැවින් මම සාමාන්‍යයෙන් මිනිසුන් මගෙන් වෙන් වන තෙක් බලා සිටිමි.මම පළමුව තරහා වෙන කෙනා නෙමෙයි ",enneagramType: 7},
        {question: " මම ඉක්මනින් එකම දින චර්යාවන් සමඟ කම්මැලි වන අතර අලුත් දේවල් උත්සාහ කිරීමට කැමතියි.",enneagramType: 7},
        {question: " සෑම දෙයක්ම පාහේ කුඩා උත්සාහයකින් වඩාත් විනෝදජනක හා විනෝදජනක විය හැකිය..",enneagramType: 7},
        {question: " මම හිතන්නේ මිනිසුන් අවශ්‍ය ප්‍රමාණයට වඩා වඩා කරදර වෙනවා.",enneagramType: 7},

        {question: " මම ඕනෑවට වඩා තද සහ ආක්‍රමණශීලී බව මට පවසා ඇත.",enneagramType: 8},
        {question: " දේවල් භාගට කිරීම මගේ හැටි නෙවෙයි .",enneagramType: 8},
        {question: " අනිත් අයගේ ශක්තිය මැන බැලීමට ම ප්‍රබල විවාද වල පැටලීමට කැමැත්තෙමි..",enneagramType: 8},
        {question: " සබඳතාවලදී, මට වැදගත් වන්නේ දේවල් සාර්ථක වන තුරු සටනේ රැඳී සිටීම. සහ ගැටුම් ගැන අවංක විය යුතු බවයි.",enneagramType: 8},
    	  {question: " මට මිනිස්සු විශ්වාස කරන්න අමාරුයි.",enneagramType: 8},       
    	  {question: " යුක්තිය සඳහා සටන් කිරීම වටී..",enneagramType: 8},
    	  {question: " මට අන් අයගේ දුර්වලකම් මම ඔවුන්ව මුණගැසෙන පළමු වතාවේදී උකහා ගත හැකිය..",enneagramType: 8},
        {question: " මම විරුද්ධත්වය පිළිගන්නවා. ඒක ගේන්න.",enneagramType: 8},
        {question: " මම ඉක්මනින් සහ බොක්කෙන්ම තීරණ ගන්නවා.",enneagramType: 8},
        {question: " මිනිසුන් පඳුර වටා පහර දෙන විට මම එයට කැමති නැත.",enneagramType: 8},
        {question: " මම ඉතා හොඳ අය ගැන කල්පනාකාරී වෙමි.",enneagramType: 8},
        {question: " මම කාමරයකට ගිය විට, වැඩි බලය ඇත්තේ කාටදැයි මම වහාම දනිමි..",enneagramType: 8},
        {question: " තමන් වෙනුවෙන් පෙනී නොසිටින මිනිසුන්ගැන මට එතරම් ගෞරවයක් නැත.",enneagramType: 8},
        {question: " මගේ එක් ආදර්ශ පාඨයක් වන්නේ හොඳ ආරක්ෂාවකට වඩා හොඳ වරදක් හොඳය යන්නයි.",enneagramType: 8},        
      	{question: " මම ආදරය කරන අයට මුකුත් කියාගෙන කරගෙන එන්න එපා .",enneagramType: 8},   
    	  {question: " මට ගරු කරන බව මම දනිමි. නමුත් සමහර අවස්ථාවලදී මම ආදරය ලබන්න කැමතියි.",enneagramType: 8},
    	  {question: " හිරිහැර කරන්නෙකුට මුහුණ දීමේ ගැටලුවක් මට නැත..",enneagramType: 8},        
    	  {question: " මම කියන්න තියෙන දේ කෙලින්ම කියන කෙනෙකි",enneagramType: 8},
      	{question: " මගේ දැඩි බාහිර පෙනුමට යටින්මුදු මොළොක්, ආදරණීය හදවතක් ඇත..",enneagramType: 8},

      	{question: " මම ගැටුම් වළක්වා ගැනීමට ඕනෑම දෙයක් පාහේ කරනු ඇත.",enneagramType: 9},       
    	  {question: " මම ස්වයං-ආරම්භකයෙක් නොවේ..",enneagramType: 9},
    	  {question: " සමහර වෙලාවට මම පොඩි පොඩි වැඩ කරලා අතරමං වෙනවා, ඇත්තටම කළ යුතු දේ කල්දමමින්.",enneagramType: 9},
    	  {question: " අන් අයට කිරීමට අවශ්‍ය දේ සමඟ යාමට මම සතුටු වෙමි.",enneagramType: 9},
        {question: " මම කල් දැමීමට නැඹුරු වෙමි.",enneagramType: 9},
       	{question: " මිනිසුන්ට මා වඩාත් තීරණාත්මක වීමට අවශ්‍ය බව පෙනේ.",enneagramType: 9},
    	  {question: " මම අවධානය වෙනතකට යොමු කර කාර්යයෙන් ඉවත් වූ විට, මම මගේ අවධානය යොමු කරන්නේ මා ඉදිරිපිට සිදුවෙමින් පවතින්නේ කුමක්ද යන්නටයි .",enneagramType: 9},
        {question: " මම බොහෝ විට අවම ප්රතිරෝධයේ මාර්ගය තෝරාගන්නෙමි.",enneagramType: 9},
        {question: " රැකියාවේදී සහ නිවසේ දින චර්යාවන් මට සැනසීමක් ගෙන දෙන අතර,එය ඉවතට විසි කිරීමමට නොසන්සුන් බවක් දැනේ.",enneagramType: 9},
        {question: " අනෙක් අය මා දකින්නේ මා  වඩා සාමකාමී ලෙසයි.",enneagramType: 9},
        {question: " මට පටන් ගන්න අමාරුයි, නමුත් මම එහෙම කළාම, මම ඇත්තටම දේවල් කරනවා..",enneagramType: 9},
        {question: " මම ඔබ දකින දේ ඔබ ලබයි ආකාරයේ පුද්ගලයෙක්.",enneagramType: 9},
        {question: " ගැටුමට අකමැති සහ සාමය පවත්වා ගැනීමට උත්සාහ කරමි .",enneagramType: 9},
        {question: " සියල්ල හොඳින් පෙනෙන නිසා තීරණ ගැනීමට අපහසුය. .",enneagramType: 9},
        {question: " අන් අයට සාමකාමීව පෙනුනත් තරහක් සහිතව සිටින්න පුළුවන්..",enneagramType: 9},
        {question: " පහසුවෙන් වෙහෙසට පත් වන අතර මගේ විවේකය සහ ශක්තිය අලුත් කිරීම සඳහා දිවා කාලයේ කාලය වෙන් කිරීමට කැමතියි .",enneagramType: 9},
        {question: " ආතතියට පත් නොවන විට විවෘත මනසක් ඇති, ප්‍රතිග්‍රාහක, සහ ඉතා ඉවසිලිවන්ත නැඹුරුවක් දක්වමි .",enneagramType: 9},
        {question: " ආතතියට පත් වූ විට ඉවත් වීමට නැඹුරු වීම, අමතක වීම, මුරණ්ඩුකම සහ උදාසීන-ආක්‍රමණශීලී වීම දක්වන්නට නැඹුරු වෙමි . ",enneagramType: 9},
        {question: " කිරීමට බොහෝ දේ හෝ ගැනීමට බොහෝ තීරණ මා කෝපයට, කනස්සල්ලට හෝ මානසික අවපීඩනයට පත් කළ හැකිය ",enneagramType: 9},
        
  // Add more quiz questions here...
  
];

let currentQuestion = 0;
const userAnswers = {};
const questionContainer = document.getElementById("question-container");
const submitBtn = document.getElementById("submit-btn");

// Function to display the quiz questions
function displayQuestion() {
  const question = quizQuestions[currentQuestion];
  const questionElement = document.createElement("div");
  const questionText = document.createElement("p");
  questionText.textContent = `${currentQuestion + 1}. ${question.question}`;
  const yesBtn = document.createElement("button");
  yesBtn.textContent = "Yes";
  yesBtn.addEventListener("click", () => {
    userAnswers[question.enneagramType] = (userAnswers[question.enneagramType] || 0) + 1;
    nextQuestion();
  });
  const noBtn = document.createElement("button");
  noBtn.textContent = "No";
  noBtn.addEventListener("click", nextQuestion);
  questionElement.appendChild(questionText);
  questionElement.appendChild(yesBtn);
  questionElement.appendChild(noBtn);
  questionContainer.appendChild(questionElement);
  submitBtn.disabled = currentQuestion === quizQuestions.length - 1;
}

// Function to move to the next question
function nextQuestion() {
  questionContainer.innerHTML = "";
  currentQuestion++;
  if (currentQuestion < quizQuestions.length) {
    displayQuestion();
  } else {
    displayResult();
  }
}

// Function to display the result
function displayResult() {
  const resultContainer = document.getElementById("result-container");
  const resultText = document.getElementById("result-text");
  const resultChart = document.getElementById("result-chart");
  resultContainer.style.display = "block";

  const userEnneagramType = Object.keys(userAnswers).reduce((a, b) => userAnswers[a] > userAnswers[b] ? a : b);
  const userEnneagramTypeName = enneagramTypes[userEnneagramType].name;
  const userEnneagramTypeDescription = enneagramTypes[userEnneagramType].description;

  resultText.textContent = `ප්‍රශ්නාවලියට ඔබ සපයා ඇති පිළිතුරු අනුව ඔබගේ වඩාත් ප්‍රමුඛ චරිත ලක්ෂණය වන්නේ ${userEnneagramTypeName} (${userEnneagramTypeDescription})`;

  const chartData = {
    labels: Object.values(enneagramTypes).map(type => type.name),
    datasets: [
      {
        data: Object.values(userAnswers),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          // Add more colors for additional enneagram types
        ],
      },
    ],
  };

  const chartOptions = {
    plugins: {
      title: {
        display: true,
        text: "Enneagram Type Scores",
      },
    },
  };

  new Chart(resultChart, {
    type: "bar",
    data: chartData,
    options: chartOptions,
  });
}

// Start the quiz
displayQuestion();
submitBtn.addEventListener("click", displayResult);
