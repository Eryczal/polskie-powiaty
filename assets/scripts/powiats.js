var powiats = [
	{ name: "powiat ropczycko-sędziszowski" },
	{ name: "powiat łosicki" },
	{ name: "powiat piaseczyński" },
	{ name: "powiat radomski" },
	{ name: "powiat sierpecki" },
	{ name: "powiat gostyniński" },
	{ name: "powiat grodziski" },
	{ name: "powiat łukowski" },
	{ name: "powiat tomaszowski" },
	{ name: "powiat Chełm" },
	{ name: "powiat brzeski" },
	{ name: "powiat Kraków" },
	{ name: "powiat zgierski" },
	{ name: "powiat sulęciński" },
	{ name: "powiat łańcucki" },
	{ name: "powiat brzeski" },
	{ name: "powiat ostrzeszowski" },
	{ name: "powiat Radom" },
	{ name: "powiat żyrardowski" },
	{ name: "powiat obornicki" },
	{ name: "powiat leszczyński" },
	{ name: "powiat Siedlce" },
	{ name: "powiat Leszno" },
	{ name: "powiat kolski" },
	{ name: "powiat Łomża" },
	{ name: "powiat rawicki" },
	{ name: "powiat słupecki" },
	{ name: "powiat kościerski" },
	{ name: "powiat włoszczowski" },
	{ name: "powiat stargardzki" },
	{ name: "powiat Wrocław" },
	{ name: "powiat giżycki" },
	{ name: "powiat mrągowski" },
	{ name: "powiat głogowski" },
	{ name: "powiat choszczeński" },
	{ name: "powiat Sosnowiec" },
	{ name: "powiat rybnicki" },
	{ name: "powiat Gliwice" },
	{ name: "powiat Jaworzno" },
	{ name: "powiat brodnicki" },
	{ name: "powiat włocławski" },
	{ name: "powiat Toruń" },
	{ name: "powiat tucholski" },
	{ name: "powiat raciborski" },
	{ name: "powiat cieszyński" },
	{ name: "powiat krośnieński" },
	{ name: "powiat nyski" },
	{ name: "powiat Jelenia Góra" },
	{ name: "powiat zgorzelecki" },
	{ name: "powiat przasnyski" },
	{ name: "powiat Ostrołęka" },
	{ name: "powiat średzki" },
	{ name: "powiat jarociński" },
	{ name: "powiat Gdynia" },
	{ name: "powiat Świnoujście" },
	{ name: "powiat kamiennogórski" },
	{ name: "powiat pabianicki" },
	{ name: "powiat kolneński" },
	{ name: "powiat Opole" },
	{ name: "powiat ostródzki" },
	{ name: "powiat Piekary Śląskie" },
	{ name: "powiat sokołowski" },
	{ name: "powiat sandomierski" },
	{ name: "powiat przemyski" },
	{ name: "powiat Przemyśl" },
	{ name: "powiat warszawski zachodni" },
	{ name: "powiat włodawski" },
	{ name: "powiat Lublin" },
	{ name: "powiat bocheński" },
	{ name: "powiat Tarnów" },
	{ name: "powiat wschowski" },
	{ name: "powiat międzyrzecki" },
	{ name: "powiat słubicki" },
	{ name: "powiat nowotomyski" },
	{ name: "powiat wągrowiecki" },
	{ name: "powiat bielski" },
	{ name: "powiat suwalski" },
	{ name: "powiat słupski" },
	{ name: "powiat ostrowiecki" },
	{ name: "powiat skarżyski" },
	{ name: "powiat kartuski" },
	{ name: "powiat częstochowski" },
	{ name: "powiat pyrzycki" },
	{ name: "powiat Siemianowice Śląskie" },
	{ name: "powiat Elbląg" },
	{ name: "powiat gryfiński" },
	{ name: "powiat Bytom" },
	{ name: "powiat złotoryjski" },
	{ name: "powiat wrocławski" },
	{ name: "powiat milicki" },
	{ name: "powiat lubiński" },
	{ name: "powiat lipnowski" },
	{ name: "powiat żniński" },
	{ name: "powiat radziejowski" },
	{ name: "powiat nakielski" },
	{ name: "powiat bartoszycki" },
	{ name: "powiat żywiecki" },
	{ name: "powiat sokólski" },
	{ name: "powiat jasielski" },
	{ name: "powiat głubczycki" },
	{ name: "powiat nowosądecki" },
	{ name: "powiat Zielona Góra" },
	{ name: "powiat Skierniewice" },
	{ name: "powiat żagański" },
	{ name: "powiat Gdańsk" },
	{ name: "powiat Łódź" },
	{ name: "powiat piotrkowski" },
	{ name: "powiat starogardzki" },
	{ name: "powiat Konin" },
	{ name: "powiat Poznań" },
	{ name: "powiat koniński" },
	{ name: "powiat stalowowolski" },
	{ name: "powiat Tarnobrzeg" },
	{ name: "powiat płoński" },
	{ name: "powiat siedlecki" },
	{ name: "powiat garwoliński" },
	{ name: "powiat lipski" },
	{ name: "powiat hrubieszowski" },
	{ name: "powiat kraśnicki" },
	{ name: "powiat łęczyński" },
	{ name: "powiat opolski" },
	{ name: "powiat rycki" },
	{ name: "powiat Zamość" },
	{ name: "powiat dąbrowski" },
	{ name: "powiat krakowski" },
	{ name: "powiat wieruszowski" },
	{ name: "powiat żarski" },
	{ name: "powiat krośnieński" },
	{ name: "powiat dębicki" },
	{ name: "powiat namysłowski" },
	{ name: "powiat czarnkowsko-trzcianecki" },
	{ name: "powiat Płock" },
	{ name: "powiat grajewski" },
	{ name: "powiat starachowicki" },
	{ name: "powiat konecki" },
	{ name: "powiat elbląski" },
	{ name: "powiat nidzicki" },
	{ name: "powiat nowomiejski" },
	{ name: "powiat Ruda Śląska" },
	{ name: "powiat białogardzki" },
	{ name: "powiat zawierciański" },
	{ name: "powiat Chorzów" },
	{ name: "powiat Katowice" },
	{ name: "powiat bolesławiecki" },
	{ name: "powiat Wałbrzych" },
	{ name: "powiat sępoleński" },
	{ name: "powiat Włocławek" },
	{ name: "powiat hajnowski" },
	{ name: "powiat chrzanowski" },
	{ name: "powiat Szczecin" },
	{ name: "powiat pucki" },
	{ name: "powiat rawski" },
	{ name: "powiat łowicki" },
	{ name: "powiat skierniewicki" },
	{ name: "powiat iławski" },
	{ name: "powiat Gorzów Wielkopolski" },
	{ name: "powiat ostrowski" },
	{ name: "powiat szydłowiecki" },
	{ name: "powiat inowrocławski" },
	{ name: "powiat niżański" },
	{ name: "powiat tarnobrzeski" },
	{ name: "powiat nowodworski" },
	{ name: "powiat pruszkowski" },
	{ name: "powiat białobrzeski" },
	{ name: "powiat wyszkowski" },
	{ name: "powiat biłgorajski" },
	{ name: "powiat chełmski" },
	{ name: "powiat parczewski" },
	{ name: "powiat świdnicki" },
	{ name: "powiat kutnowski" },
	{ name: "powiat łódzki wschodni" },
	{ name: "powiat kolbuszowski" },
	{ name: "powiat oleski" },
	{ name: "powiat strzelecki" },
	{ name: "powiat złotowski" },
	{ name: "powiat Suwałki" },
	{ name: "powiat kościański" },
	{ name: "powiat grodziski" },
	{ name: "powiat szamotulski" },
	{ name: "powiat Kielce" },
	{ name: "powiat ełcki" },
	{ name: "powiat dzierżoniowski" },
	{ name: "powiat tczewski" },
	{ name: "powiat kołobrzeski" },
	{ name: "powiat Koszalin" },
	{ name: "powiat kłobucki" },
	{ name: "powiat gliwicki" },
	{ name: "powiat lubliniecki" },
	{ name: "powiat Bielsko-Biała" },
	{ name: "powiat Legnica" },
	{ name: "powiat grudziądzki" },
	{ name: "powiat wołowski" },
	{ name: "powiat toruński" },
	{ name: "powiat chełmiński" },
	{ name: "powiat wodzisławski" },
	{ name: "powiat leski" },
	{ name: "powiat bieszczadzki" },
	{ name: "powiat prudnicki" },
	{ name: "powiat ząbkowicki" },
	{ name: "powiat makowski" },
	{ name: "powiat pszczyński" },
	{ name: "powiat gołdapski" },
	{ name: "powiat Sopot" },
	{ name: "powiat rzeszowski" },
	{ name: "powiat jeleniogórski" },
	{ name: "powiat świdnicki" },
	{ name: "powiat opoczyński" },
	{ name: "powiat człuchowski" },
	{ name: "powiat ostrowski" },
	{ name: "powiat Kalisz" },
	{ name: "powiat mławski" },
	{ name: "powiat gorzowski" },
	{ name: "powiat mogileński" },
	{ name: "powiat strzyżowski" },
	{ name: "powiat miński" },
	{ name: "powiat zwoleński" },
	{ name: "powiat żuromiński" },
	{ name: "powiat lubelski" },
	{ name: "powiat proszowicki" },
	{ name: "powiat wielicki" },
	{ name: "powiat sieradzki" },
	{ name: "powiat brzeziński" },
	{ name: "powiat strzelecko-drezdenecki" },
	{ name: "powiat świebodziński" },
	{ name: "powiat leżajski" },
	{ name: "powiat lubaczowski" },
	{ name: "powiat chodzieski" },
	{ name: "powiat międzychodzki" },
	{ name: "powiat kluczborski" },
	{ name: "powiat jędrzejowski" },
	{ name: "powiat gostyński" },
	{ name: "powiat kazimierski" },
	{ name: "powiat kaliski" },
	{ name: "powiat siemiatycki" },
	{ name: "powiat gdański" },
	{ name: "powiat szczycieński" },
	{ name: "powiat łobeski" },
	{ name: "powiat myszkowski" },
	{ name: "powiat oleśnicki" },
	{ name: "powiat strzeliński" },
	{ name: "powiat wąbrzeski" },
	{ name: "powiat kętrzyński" },
	{ name: "powiat białostocki" },
	{ name: "powiat augustowski" },
	{ name: "powiat wałbrzyski" },
	{ name: "powiat kłodzki" },
	{ name: "powiat Tychy" },
	{ name: "powiat Rybnik" },
	{ name: "powiat grójecki" },
	{ name: "powiat lubartowski" },
	{ name: "powiat puławski" },
	{ name: "powiat radzyński" },
	{ name: "powiat Biała Podlaska" },
	{ name: "powiat Nowy Sącz" },
	{ name: "powiat pilski" },
	{ name: "powiat wysokomazowiecki" },
	{ name: "powiat buski" },
	{ name: "powiat śremski" },
	{ name: "powiat kępiński" },
	{ name: "powiat turecki" },
	{ name: "powiat opatowski" },
	{ name: "powiat Słupsk" },
	{ name: "powiat pińczowski" },
	{ name: "powiat koszaliński" },
	{ name: "powiat bielski" },
	{ name: "powiat węgorzewski" },
	{ name: "powiat bieruńsko-lędziński" },
	{ name: "powiat policki" },
	{ name: "powiat polkowicki" },
	{ name: "powiat Jastrzębie-Zdrój" },
	{ name: "powiat tatrzański" },
	{ name: "powiat nowotarski" },
	{ name: "powiat lwówecki" },
	{ name: "powiat legionowski" },
	{ name: "powiat olecki" },
	{ name: "powiat tomaszowski" },
	{ name: "powiat zambrowski" },
	{ name: "powiat będziński" },
	{ name: "powiat kamieński" },
	{ name: "powiat przysuski" },
	{ name: "powiat płocki" },
	{ name: "powiat pułtuski" },
	{ name: "powiat sochaczewski" },
	{ name: "powiat bialski" },
	{ name: "powiat krasnostawski" },
	{ name: "powiat zamojski" },
	{ name: "powiat tarnowski" },
	{ name: "powiat bełchatowski" },
	{ name: "powiat łaski" },
	{ name: "powiat łęczycki" },
	{ name: "powiat pajęczański" },
	{ name: "powiat radomszczański" },
	{ name: "powiat zduńskowolski" },
	{ name: "powiat nowosolski" },
	{ name: "powiat jarosławski" },
	{ name: "powiat mielecki" },
	{ name: "powiat Warszawa" },
	{ name: "powiat krapkowicki" },
	{ name: "powiat moniecki" },
	{ name: "powiat kielecki" },
	{ name: "powiat wrzesiński" },
	{ name: "powiat gnieźnieński" },
	{ name: "powiat malborski" },
	{ name: "powiat lidzbarski" },
	{ name: "powiat olsztyński" },
	{ name: "powiat sławieński" },
	{ name: "powiat działdowski" },
	{ name: "powiat górowski" },
	{ name: "powiat sztumski" },
	{ name: "powiat kwidzyński" },
	{ name: "powiat Dąbrowa Górnicza" },
	{ name: "powiat Mysłowice" },
	{ name: "powiat myśliborski" },
	{ name: "powiat golubsko-dobrzyński" },
	{ name: "powiat aleksandrowski" },
	{ name: "powiat świecki" },
	{ name: "powiat pleszewski" },
	{ name: "powiat Krosno" },
	{ name: "powiat sejneński" },
	{ name: "powiat sanocki" },
	{ name: "powiat suski" },
	{ name: "powiat zielonogórski" },
	{ name: "powiat wołomiński" },
	{ name: "powiat mikołowski" },
	{ name: "powiat goleniowski" },
	{ name: "powiat Rzeszów" },
	{ name: "powiat łomżyński" },
	{ name: "powiat opolski" },
	{ name: "powiat wałecki" },
	{ name: "powiat drawski" },
	{ name: "powiat chojnicki" },
	{ name: "powiat tarnogórski" },
	{ name: "powiat lęborski" },
	{ name: "powiat bytowski" },
	{ name: "powiat ciechanowski" },
	{ name: "powiat gryficki" },
	{ name: "powiat poznański" },
	{ name: "powiat przeworski" },
	{ name: "powiat otwocki" },
	{ name: "powiat kozienicki" },
	{ name: "powiat janowski" },
	{ name: "powiat limanowski" },
	{ name: "powiat miechowski" },
	{ name: "powiat myślenicki" },
	{ name: "powiat olkuski" },
	{ name: "powiat oświęcimski" },
	{ name: "powiat Piotrków Trybunalski" },
	{ name: "powiat poddębicki" },
	{ name: "powiat wieluński" },
	{ name: "powiat brzozowski" },
	{ name: "powiat kędzierzyńsko-kozielski" },
	{ name: "powiat krotoszyński" },
	{ name: "powiat Białystok" },
	{ name: "powiat wolsztyński" },
	{ name: "powiat szczecinecki" },
	{ name: "powiat świdwiński" },
	{ name: "powiat piski" },
	{ name: "powiat Świętochłowice" },
	{ name: "powiat Zabrze" },
	{ name: "powiat Olsztyn" },
	{ name: "powiat braniewski" },
	{ name: "powiat Częstochowa" },
	{ name: "powiat trzebnicki" },
	{ name: "powiat bydgoski" },
	{ name: "powiat oławski" },
	{ name: "powiat średzki" },
	{ name: "powiat legnicki" },
	{ name: "powiat Bydgoszcz" },
	{ name: "powiat Grudziądz" },
	{ name: "powiat rypiński" },
	{ name: "powiat gorlicki" },
	{ name: "powiat lubański" },
	{ name: "powiat wadowicki" },
	{ name: "powiat ostrołęcki" },
	{ name: "powiat Żory" },
	{ name: "powiat nowodworski" },
	{ name: "powiat jaworski" },
	{ name: "powiat węgrowski" },
	{ name: "powiat wejherowski" },
	{ name: "powiat staszowski" },
];

export default powiats;