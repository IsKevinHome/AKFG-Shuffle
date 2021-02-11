// genAlbum goes through an object and creates elements to append to our HTML

function genAlbum(object) {
	// This instantiates through the table to append headings from our object.
	let headingNames = Object.keys(object.tracks[0]);
	let table = document.getElementById('tracks');
	table.innerHTML = '';
	let headings = document.createElement('tr');
	headingNames.forEach((arr) => {
		let tableHeader = document.createElement('th');
		tableHeader.textContent = arr;
		headings.appendChild(tableHeader);
	});
	table.appendChild(headings);
	// This instantiates our key values.
	let vals = Object.values(object.tracks);
	vals.forEach(function (album) {
		let row = document.createElement('tr');
		for (let properties in album) {
			let cell = document.createElement('td');
			cell.textContent = album[properties];
			row.appendChild(cell);
		}
		table.appendChild(row);
	});

	// Appends the album art
	let albumArt = document.getElementById('image');
	albumArt.src = object.img;

	//generates our description
	let about = document.getElementById('descrip');
	about.innerHTML = object.description;
	// running this will make it so the table is it's own thing
	// return table;
}

const KIMI_TSUNAGI_FIVE_M = {
	tracks: [
		{ 'No.': 1, Title: 'フラッシュバック', Length: '1:58' },
		{ 'No.': 2, Title: '未来の破片', Length: '4:45' },
		{ 'No.': 3, Title: '電波塔', Length: '3:31' },
		{ 'No.': 4, Title: 'アンダースタンド', Length: '3:44' },
		{ 'No.': 5, Title: '夏の日、残像', Length: '4:41' },
		{ 'No.': 6, Title: '無限グライダ', Length: '5:07' },
		{ 'No.': 7, Title: 'その訳を', Length: '4:36' },
		{ 'No.': 8, Title: 'N.G.S', Length: '2:54' },
		{ 'No.': 9, Title: '自閉探索', Length: '3:28' },
		{ 'No.': 10, Title: 'E', Length: '4:12' },
		{ 'No.': 11, Title: '君という花', Length: '6:10' },
		{ 'No.': 12, Title: 'ノーネーム', Length: '5:00' },
	],
	description: 'Album description goes here...',
	img: './img/Kimi_Tsunagi_Five_M.png',
	iframe:
		'<iframe src="https://open.spotify.com/embed/album/3j2n8ZYCGF2vBG0FlNLySB" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
};

const SOL_FA = {
	tracks: [
		{ 'No.': 1, Title: '振動', Length: '2:27' },
		{ 'No.': 2, Title: 'リライト', Length: '3:47' },
		{ 'No.': 3, Title: '君の街まで', Length: '3:36' },
		{ 'No.': 4, Title: 'マイ・ワールド', Length: '4:03' },
		{ 'No.': 5, Title: '夜の向こう', Length: '3:12' },
		{ 'No.': 6, Title: 'ラストシーン', Length: '4:01' },
		{ 'No.': 7, Title: 'サイレン', Length: '5:28' },
		{ 'No.': 8, Title: 'Re:Re:', Length: '3:48' },
		{ 'No.': 9, Title: '24時 ', Length: '3:31' },
		{ 'No.': 10, Title: '真夜中と真昼の夢', Length: '4:21' },
		{ 'No.': 11, Title: '海岸通り', Length: '4:40' },
		{ 'No.': 12, Title: 'ループ&ループ', Length: '3:45' },
	],
	description: 'Album description goes here...',
	img: './img/sol-Fa.png',
};

const FANCLUB = {
	tracks: [
		{ 'No.': 1, Title: '暗号のワルツ', Length: '4:25' },
		{ 'No.': 2, Title: 'ワールドアパート', Length: '4:29' },
		{ 'No.': 3, Title: 'ブラックアウト', Length: '5:19' },
		{ 'No.': 4, Title: '桜草', Length: '3:53' },
		{ 'No.': 5, Title: '路地裏のうさぎ', Length: '2:47' },
		{ 'No.': 6, Title: 'ブルートレイン', Length: '4:19' },
		{ 'No.': 7, Title: '真冬のダンス', Length: '3:25' },
		{ 'No.': 8, Title: 'バタフライ', Length: '4:44' },
		{ 'No.': 9, Title: 'センスレス', Length: '5:36' },
		{ 'No.': 10, Title: '月光', Length: '6:22' },
		{ 'No.': 11, Title: 'タイトロープ', Length: '5:28' },
	],
	description: 'Album description goes here...',
	img: './img/Fan Club.png',
};

const WORLD_WORLD_WORLD = {
	tracks: [
		{ 'No.': 1, Title: 'ワールド ワールド ワールド', Length: '1:18' },
		{ 'No.': 2, Title: 'アフターダーク', Length: '3:12' },
		{ 'No.': 3, Title: '旅立つ君へ', Length: '2:49' },
		{ 'No.': 4, Title: 'ネオテニー', Length: '4:43' },
		{ 'No.': 5, Title: 'トラベログ', Length: '4:07' },
		{ 'No.': 6, Title: 'No.9', Length: '3:33' },
		{ 'No.': 7, Title: 'ナイトダイビング', Length: '3:02' },
		{ 'No.': 8, Title: 'ライカ', Length: '3:52' },
		{ 'No.': 9, Title: '惑星', Length: '4:01' },
		{ 'No.': 10, Title: '転がる岩、君に朝が降る', Length: '4:38' },
		{ 'No.': 11, Title: 'ワールド ワールド', Length: '1:21' },
		{ 'No.': 12, Title: '或る街の群青', Length: '4:16' },
		{ 'No.': 13, Title: '新しい世界', Length: '3:18' },
	],
	description: 'Album description goes here...',
	img: './img/World World World.png',
};

const SURF_BUNGAKU_KAMAKURA = {
	tracks: [
		{ 'No.': 1, Title: '藤沢ルーザー', Length: '2:45' },
		{ 'No.': 2, Title: '鵠沼サーフ', Length: '2:28' },
		{ 'No.': 3, Title: '江ノ島エスカー', Length: '2:39' },
		{ 'No.': 4, Title: '腰越クライベイビー', Length: '3:54' },
		{ 'No.': 5, Title: '七里ヶ浜スカイウォーク', Length: '2:50' },
		{ 'No.': 6, Title: '稲村ヶ崎ジェーン', Length: '3:09' },
		{ 'No.': 7, Title: '極楽寺ハートブレイク', Length: '2:21' },
		{ 'No.': 8, Title: '長谷サンズ', Length: '2:56' },
		{ 'No.': 9, Title: '由比ヶ浜カイト', Length: '3:54' },
		{ 'No.': 10, Title: '鎌倉グッドバイ', Length: '4:31' },
	],
	description: 'Album description goes here...',
	img: './img/Surf Bungaku Kamakura.png',
};

const MAGIC_DISK = {
	tracks: [
		{ 'No.': 1, Title: '新世紀のラブソング', Length: '5:14' },
		{ 'No.': 2, Title: 'マジックディスク', Length: '4:37' },
		{ 'No.': 3, Title: '双子葉', Length: '3:59' },
		{ 'No.': 4, Title: 'さよならロストジェネレイション', Length: '5:19' },
		{ 'No.': 5, Title: '迷子犬と雨のビート', Length: '4:57' },
		{ 'No.': 6, Title: '青空と黒い猫', Length: '4:39' },
		{ 'No.': 7, Title: '架空生物のブルース', Length: '4:19' },
		{ 'No.': 8, Title: 'ラストダンスは悲しみを乗せて', Length: '3:42' },
		{ 'No.': 9, Title: 'マイクロフォン', Length: '3:21' },
		{ 'No.': 10, Title: 'ライジングサン', Length: '4:18' },
		{ 'No.': 11, Title: 'イエス', Length: '3:17' },
		{ 'No.': 12, Title: '橙', Length: '4:14' },
		{ 'No.': 13, Title: 'ソラニン', Length: '4:33' },
	],
	description: 'Album description goes here...',
	img: './img/Magic Disk.png',
};

const LANDMARK = {
	tracks: [
		{ 'No.': 1, Title: 'All Right Part 2', Length: '3:34' },
		{ 'No.': 2, Title: 'N2', Length: '3:06' },
		{ 'No.': 3, Title: '1.2.3.4.5.6. Baby', Length: '3:24' },
		{ 'No.': 4, Title: 'AとZ', Length: '4:38' },
		{ 'No.': 5, Title: '大洋航路', Length: '3:15' },
		{ 'No.': 6, Title: 'バイシクルレース', Length: '4:16' },
		{ 'No.': 7, Title: 'それでは、また明日', Length: '3:42' },
		{ 'No.': 8, Title: '1980', Length: '3:36' },
		{ 'No.': 9, Title: 'マシンガンと形容詞', Length: '3:54' },
		{ 'No.': 10, Title: 'レールロード', Length: '3:08' },
		{ 'No.': 11, Title: '踵で愛を打ち鳴らせ', Length: '4:23' },
		{ 'No.': 12, Title: 'アネモネの咲く春に', Length: '5:01' },
	],
	description: 'Album description goes here...',
	img: './img/Landmark.png',
};

const HOMETOWN = {
	tracks: [
		{ 'No.': 1, Title: 'クロックワーク', Length: '4:02' },
		{ 'No.': 2, Title: 'ホームタウン', Length: '2:57' },
		{ 'No.': 3, Title: 'レインボーフラッグ', Length: '3:40' },
		{ 'No.': 4, Title: 'サーカス', Length: '4:37' },
		{ 'No.': 5, Title: '荒野を歩け', Length: '4:16' },
		{ 'No.': 6, Title: 'UCLA', Length: '5:18' },
		{ 'No.': 7, Title: 'モータープール', Length: '3:23' },
		{ 'No.': 8, Title: 'ダンシングガール', Length: '3:09' },
		{ 'No.': 9, Title: 'さようならソルジャー', Length: '4:23' },
		{ 'No.': 10, Title: 'ボーイズ&ガールズ', Length: '4:40' },
	],
	description: 'Album description goes here...',
	img: './img/Hometown.png',
};

// Below puts the objects into an array, shuffles, and picks one.
let AKFG = [
	KIMI_TSUNAGI_FIVE_M,
	SOL_FA,
	FANCLUB,
	WORLD_WORLD_WORLD,
	SURF_BUNGAKU_KAMAKURA,
	MAGIC_DISK,
	LANDMARK,
	HOMETOWN,
];

function createAlbum() {
	function shuffle(array) {
		var m = array.length,
			t,
			i;
		while (m) {
			i = Math.floor(Math.random() * m--);
			t = array[m];
			array[m] = array[i];
			array[i] = t;
		}
		return array[0];
	}

	let suggestion = shuffle(AKFG);
	return document.body.appendChild(genAlbum(suggestion));
}

// if for some reason they wont be inside the same div
// when this is generated, check the div structure, then
// check to see if you're returning twice.
