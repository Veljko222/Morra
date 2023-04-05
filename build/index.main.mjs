// Automatically generated with Reach 0.1.13 (88e48902)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (88e48902)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Anna(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Anna expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Anna expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v81 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:53:41:application',
    fs: ['at ./index.rsh:52:14:application call to [unknown function] (defined at: ./index.rsh:52:18:function exp)'],
    msg: 'getHand',
    who: 'Anna'
    });
  const v82 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:54:54:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:52:14:application call to [unknown function] (defined at: ./index.rsh:52:18:function exp)'],
    msg: 'random',
    who: 'Anna'
    });
  const v83 = stdlib.digest([ctc0, ctc0], [v82, v81]);
  const v85 = stdlib.protect(ctc0, await interact.getGuess(), {
    at: './index.rsh:56:52:application',
    fs: ['at ./index.rsh:52:14:application call to [unknown function] (defined at: ./index.rsh:52:18:function exp)'],
    msg: 'getGuess',
    who: 'Anna'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v83, v85],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:59:10:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:59:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v87, v88], secs: v90, time: v89, didSend: v33, from: v86 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v87, v88], secs: v90, time: v89, didSend: v33, from: v86 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v96, v97], secs: v99, time: v98, didSend: v44, from: v95 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v86, v87, v82, v81],
    evt_cnt: 2,
    funcNum: 2,
    lct: v98,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:75:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v103, v104], secs: v106, time: v105, didSend: v54, from: v102 } = txn3;
      
      ;
      const v111 = stdlib.safeAdd(v104, v96);
      const v112 = stdlib.eq(v111, v88);
      const v113 = stdlib.eq(v88, v97);
      const v121 = v113 ? stdlib.checkedBigNumberify('./index.rsh:9:12:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:11:12:decimal', stdlib.UInt_max, '2');
      const v114 = stdlib.eq(v111, v97);
      const v122 = v114 ? stdlib.checkedBigNumberify('./index.rsh:15:12:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:17:12:decimal', stdlib.UInt_max, '1');
      const v110 = v112 ? v121 : v122;
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v103, v104], secs: v106, time: v105, didSend: v54, from: v102 } = txn3;
  ;
  const v107 = stdlib.addressEq(v86, v102);
  stdlib.assert(v107, {
    at: './index.rsh:75:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Anna'
    });
  const v108 = stdlib.digest([ctc0, ctc0], [v103, v104]);
  const v109 = stdlib.digestEq(v87, v108);
  stdlib.assert(v109, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:76:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Anna'
    });
  const v111 = stdlib.safeAdd(v104, v96);
  const v112 = stdlib.eq(v111, v88);
  const v113 = stdlib.eq(v88, v97);
  const v121 = v113 ? stdlib.checkedBigNumberify('./index.rsh:9:12:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:11:12:decimal', stdlib.UInt_max, '2');
  const v114 = stdlib.eq(v111, v97);
  const v122 = v114 ? stdlib.checkedBigNumberify('./index.rsh:15:12:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:17:12:decimal', stdlib.UInt_max, '1');
  const v110 = v112 ? v121 : v122;
  stdlib.protect(ctc2, await interact.seeOutcome(v110), {
    at: './index.rsh:83:24:application',
    fs: ['at ./index.rsh:82:7:application call to [unknown function] (defined at: ./index.rsh:82:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Anna'
    });
  
  return;
  
  
  
  
  
  
  };
export async function Jack(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Jack expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Jack expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Digest;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v87, v88], secs: v90, time: v89, didSend: v33, from: v86 } = txn1;
  ;
  const v93 = stdlib.protect(ctc1, await interact.getHand(), {
    at: './index.rsh:64:51:application',
    fs: ['at ./index.rsh:63:14:application call to [unknown function] (defined at: ./index.rsh:63:18:function exp)'],
    msg: 'getHand',
    who: 'Jack'
    });
  const v94 = stdlib.protect(ctc1, await interact.getGuess(), {
    at: './index.rsh:65:53:application',
    fs: ['at ./index.rsh:63:14:application call to [unknown function] (defined at: ./index.rsh:63:18:function exp)'],
    msg: 'getGuess',
    who: 'Jack'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v86, v87, v93, v94],
    evt_cnt: 2,
    funcNum: 1,
    lct: v89,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:67:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v96, v97], secs: v99, time: v98, didSend: v44, from: v95 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v96, v97], secs: v99, time: v98, didSend: v44, from: v95 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 2,
    out_tys: [ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v103, v104], secs: v106, time: v105, didSend: v54, from: v102 } = txn3;
  ;
  const v107 = stdlib.addressEq(v86, v102);
  stdlib.assert(v107, {
    at: './index.rsh:75:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Jack'
    });
  const v108 = stdlib.digest([ctc1, ctc1], [v103, v104]);
  const v109 = stdlib.digestEq(v87, v108);
  stdlib.assert(v109, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:76:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Jack'
    });
  const v111 = stdlib.safeAdd(v104, v96);
  const v112 = stdlib.eq(v111, v88);
  const v113 = stdlib.eq(v88, v97);
  const v121 = v113 ? stdlib.checkedBigNumberify('./index.rsh:9:12:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:11:12:decimal', stdlib.UInt_max, '2');
  const v114 = stdlib.eq(v111, v97);
  const v122 = v114 ? stdlib.checkedBigNumberify('./index.rsh:15:12:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:17:12:decimal', stdlib.UInt_max, '1');
  const v110 = v112 ? v121 : v122;
  stdlib.protect(ctc2, await interact.seeOutcome(v110), {
    at: './index.rsh:83:24:application',
    fs: ['at ./index.rsh:82:7:application call to [unknown function] (defined at: ./index.rsh:82:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Jack'
    });
  
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`_reachp_0((uint64,digest,uint64))void`, `_reachp_1((uint64,uint64,uint64))void`, `_reachp_2((uint64,uint64,uint64))void`],
    pure: [],
    sigs: [`_reachp_0((uint64,digest,uint64))void`, `_reachp_1((uint64,uint64,uint64))void`, `_reachp_2((uint64,uint64,uint64))void`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAEAAECCCYCAAEAMRhBAVAoZEkiWzUBJVs1AilkggMEDEaPgARpugWiBG0NyxA2GgCOAwERARwA/QAxADUQNAsiWzUMNAtXCCA1D4AElF1hFjQMFlA0D1A0C1coCFCwNAyIAWQ0EDQPUCMyBjUCNQEpTFcAQGcoNAEWNAIWUGcxGSISRIgBSzQDQAAKgAQVH3x1NARQsCNDIzQBEkRJVwAgNRBXICA1DzQLIls1DIAEzfmklDQMFlA0C1cICFA0C1cQCFCwNAyIAP40EDQPUCQyBkL/lyQ0ARJESVcAIDUQVyAgNQ80CyJbNQw0CyVbNQ40C4EQWzUNgASrut9JNAwWUDQOFlA0DRZQsDQMiAC4NBAxABJENA80DhY0DRZQARJEMRmBBRJEiACnIjIKMgmIAKtC/1GIAIuBoI0GNAYINQY2GgE1C0L+8IgAdzYaATULQv9DiABsNhoBNQtC/3UiMTQSRCQxNRJEIjE2EkQiMTcSRIgATYFAryIiQv7tMRkiEkRC/wUisgEjshCyB7IIs4lIiUwJSTUGMgmIAEWJCUlB/+5JNQYxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIEkSJIzUDiUkiEkw0AhIRRIk0BjQHSg9B/7pC/8KxsglC/6OxQv+f`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `45`,
    101: `47`,
    102: `47`,
    103: `48`,
    104: `48`,
    105: `49`,
    106: `50`,
    107: `51`,
    108: `51`,
    109: `53`,
    11: `2`,
    110: `53`,
    111: `54`,
    112: `54`,
    113: `55`,
    114: `56`,
    115: `57`,
    116: `57`,
    117: `57`,
    118: `58`,
    119: `59`,
    12: `4`,
    120: `60`,
    121: `60`,
    122: `61`,
    123: `62`,
    124: `62`,
    125: `63`,
    126: `64`,
    127: `65`,
    128: `66`,
    129: `66`,
    13: `4`,
    130: `67`,
    131: `68`,
    132: `69`,
    133: `71`,
    134: `71`,
    135: `71`,
    136: `73`,
    137: `73`,
    138: `74`,
    139: `74`,
    14: `5`,
    140: `74`,
    141: `76`,
    142: `76`,
    143: `76`,
    144: `76`,
    145: `76`,
    146: `76`,
    147: `77`,
    148: `77`,
    149: `78`,
    15: `5`,
    150: `79`,
    151: `81`,
    152: `82`,
    153: `84`,
    154: `85`,
    155: `85`,
    156: `86`,
    157: `87`,
    158: `89`,
    159: `90`,
    16: `5`,
    160: `90`,
    161: `90`,
    162: `91`,
    163: `91`,
    164: `92`,
    165: `92`,
    166: `92`,
    167: `93`,
    168: `93`,
    169: `94`,
    17: `6`,
    170: `94`,
    171: `95`,
    172: `96`,
    173: `97`,
    174: `97`,
    175: `98`,
    176: `98`,
    177: `98`,
    178: `98`,
    179: `98`,
    18: `7`,
    180: `98`,
    181: `99`,
    182: `99`,
    183: `100`,
    184: `101`,
    185: `102`,
    186: `102`,
    187: `103`,
    188: `103`,
    189: `103`,
    19: `8`,
    190: `104`,
    191: `105`,
    192: `105`,
    193: `106`,
    194: `106`,
    195: `106`,
    196: `107`,
    197: `108`,
    198: `110`,
    199: `110`,
    2: `2`,
    20: `9`,
    200: `111`,
    201: `111`,
    202: `111`,
    203: `113`,
    204: `113`,
    205: `114`,
    206: `114`,
    207: `115`,
    208: `116`,
    209: `117`,
    21: `10`,
    210: `117`,
    211: `118`,
    212: `118`,
    213: `118`,
    214: `120`,
    215: `121`,
    216: `121`,
    217: `122`,
    218: `123`,
    219: `125`,
    22: `11`,
    220: `126`,
    221: `126`,
    222: `126`,
    223: `127`,
    224: `127`,
    225: `128`,
    226: `128`,
    227: `128`,
    228: `129`,
    229: `129`,
    23: `11`,
    230: `130`,
    231: `130`,
    232: `131`,
    233: `132`,
    234: `133`,
    235: `133`,
    236: `134`,
    237: `134`,
    238: `135`,
    239: `136`,
    24: `12`,
    240: `137`,
    241: `137`,
    242: `138`,
    243: `138`,
    244: `139`,
    245: `139`,
    246: `140`,
    247: `141`,
    248: `141`,
    249: `142`,
    25: `13`,
    250: `142`,
    251: `142`,
    252: `142`,
    253: `142`,
    254: `142`,
    255: `143`,
    256: `143`,
    257: `144`,
    258: `145`,
    259: `146`,
    26: `14`,
    260: `146`,
    261: `147`,
    262: `148`,
    263: `149`,
    264: `149`,
    265: `150`,
    266: `151`,
    267: `152`,
    268: `154`,
    269: `154`,
    27: `14`,
    270: `155`,
    271: `155`,
    272: `155`,
    273: `156`,
    274: `156`,
    275: `157`,
    276: `157`,
    277: `158`,
    278: `159`,
    279: `162`,
    28: `15`,
    280: `162`,
    281: `163`,
    282: `163`,
    283: `164`,
    284: `165`,
    285: `165`,
    286: `166`,
    287: `167`,
    288: `168`,
    289: `169`,
    29: `16`,
    290: `170`,
    291: `175`,
    292: `175`,
    293: `176`,
    294: `176`,
    295: `177`,
    296: `178`,
    297: `180`,
    298: `180`,
    299: `180`,
    3: `2`,
    30: `18`,
    300: `182`,
    301: `183`,
    302: `183`,
    303: `184`,
    304: `184`,
    305: `185`,
    306: `185`,
    307: `185`,
    308: `186`,
    309: `186`,
    31: `18`,
    310: `186`,
    311: `188`,
    312: `188`,
    313: `188`,
    314: `189`,
    315: `189`,
    316: `189`,
    317: `189`,
    318: `191`,
    319: `191`,
    32: `18`,
    320: `192`,
    321: `193`,
    322: `193`,
    323: `194`,
    324: `194`,
    325: `194`,
    326: `195`,
    327: `195`,
    328: `196`,
    329: `196`,
    33: `18`,
    330: `196`,
    331: `198`,
    332: `198`,
    333: `198`,
    334: `199`,
    335: `199`,
    336: `199`,
    337: `200`,
    338: `200`,
    339: `201`,
    34: `18`,
    340: `201`,
    341: `201`,
    342: `203`,
    343: `203`,
    344: `203`,
    345: `204`,
    346: `204`,
    347: `204`,
    348: `205`,
    349: `205`,
    35: `18`,
    350: `206`,
    351: `206`,
    352: `206`,
    353: `208`,
    354: `209`,
    355: `209`,
    356: `210`,
    357: `211`,
    358: `212`,
    359: `213`,
    36: `18`,
    360: `213`,
    361: `214`,
    362: `215`,
    363: `216`,
    364: `217`,
    365: `217`,
    366: `218`,
    367: `219`,
    368: `220`,
    369: `221`,
    37: `18`,
    370: `221`,
    371: `222`,
    372: `223`,
    373: `224`,
    374: `224`,
    375: `224`,
    376: `225`,
    377: `225`,
    378: `226`,
    379: `227`,
    38: `18`,
    380: `228`,
    381: `229`,
    382: `229`,
    383: `229`,
    384: `231`,
    385: `231`,
    386: `232`,
    387: `233`,
    388: `234`,
    389: `236`,
    39: `18`,
    390: `236`,
    391: `236`,
    392: `238`,
    393: `239`,
    394: `239`,
    395: `240`,
    396: `241`,
    397: `241`,
    398: `242`,
    399: `242`,
    4: `2`,
    40: `18`,
    400: `243`,
    401: `243`,
    402: `244`,
    403: `245`,
    404: `247`,
    405: `248`,
    406: `250`,
    407: `251`,
    408: `252`,
    409: `253`,
    41: `18`,
    410: `253`,
    411: `254`,
    412: `254`,
    413: `255`,
    414: `255`,
    415: `255`,
    416: `256`,
    417: `258`,
    418: `259`,
    419: `260`,
    42: `18`,
    420: `260`,
    421: `260`,
    422: `261`,
    423: `262`,
    424: `262`,
    425: `265`,
    426: `265`,
    427: `266`,
    428: `266`,
    429: `267`,
    43: `18`,
    430: `268`,
    431: `269`,
    432: `270`,
    433: `270`,
    434: `271`,
    435: `272`,
    436: `272`,
    437: `273`,
    438: `273`,
    439: `274`,
    44: `18`,
    440: `274`,
    441: `275`,
    442: `276`,
    443: `277`,
    444: `277`,
    445: `278`,
    446: `279`,
    447: `280`,
    448: `281`,
    449: `281`,
    45: `18`,
    450: `282`,
    451: `283`,
    452: `284`,
    453: `286`,
    454: `287`,
    455: `287`,
    456: `288`,
    457: `290`,
    458: `291`,
    459: `292`,
    46: `18`,
    460: `293`,
    461: `294`,
    462: `294`,
    463: `295`,
    464: `296`,
    465: `297`,
    466: `298`,
    467: `300`,
    468: `300`,
    469: `301`,
    47: `19`,
    470: `301`,
    471: `302`,
    472: `303`,
    473: `304`,
    474: `304`,
    475: `304`,
    476: `305`,
    477: `305`,
    478: `305`,
    479: `307`,
    48: `19`,
    480: `308`,
    481: `308`,
    482: `309`,
    483: `309`,
    484: `309`,
    485: `311`,
    486: `312`,
    49: `19`,
    5: `2`,
    50: `20`,
    51: `20`,
    52: `20`,
    53: `20`,
    54: `20`,
    55: `20`,
    56: `20`,
    57: `20`,
    58: `22`,
    59: `24`,
    6: `2`,
    60: `24`,
    61: `25`,
    62: `25`,
    63: `26`,
    64: `26`,
    65: `27`,
    66: `28`,
    67: `29`,
    68: `29`,
    69: `30`,
    7: `2`,
    70: `30`,
    71: `31`,
    72: `31`,
    73: `31`,
    74: `32`,
    75: `32`,
    76: `33`,
    77: `33`,
    78: `33`,
    79: `33`,
    8: `2`,
    80: `33`,
    81: `33`,
    82: `34`,
    83: `34`,
    84: `35`,
    85: `36`,
    86: `37`,
    87: `37`,
    88: `38`,
    89: `39`,
    9: `2`,
    90: `39`,
    91: `40`,
    92: `40`,
    93: `40`,
    94: `41`,
    95: `42`,
    96: `44`,
    97: `44`,
    98: `45`,
    99: `45`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 1,
  stateSize: 64,
  unsupported: [],
  version: 13,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"v159","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T2","name":"v162","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T2","name":"v165","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080610a829081380391601f1980601f85011683019360018060401b0392848610848711176102f657816060928692604098895283398101031261030c5783519260608401848110848211176102f65785528051845260209385858301519286830193845201519486820195865243600355865191818301838110878211176102f6578852600080935260049660ff8854166102df5760807f4f453854b6a90dba7951e2aeeb8854b2b5f80576fe444dd363a967d18d9175e4918a519033825284518683015287518c830152516060820152a15180159081156102d3575b50156102bc57346102a557865192878401848110878211176102925788528184019383855233905251835260019586835543875587519333838601525188850152878452606084018481108782111761027f578852835195861161026c57600254908782811c92168015610262575b8383101461024f5750601f8111610208575b508093601f86116001146101a55750509183949184939461019a575b50501b916000199060031b1c1916176002555b5161077090816103128239f35b01519250388061017a565b600283528183209493928692918316915b888383106101ee57505050106101d5575b505050811b0160025561018d565b015160001960f88460031b161c191690553880806101c7565b8587015188559096019594850194879350908101906101b6565b60028352818320601f870160051c810191838810610245575b601f0160051c019087905b82811061023a57505061015e565b84815501879061022c565b9091508190610221565b634e487b7160e01b845260229052602483fd5b91607f169161014c565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b634e487b7160e01b845260418852602484fd5b865163100960cb60e01b8152600981880152602490fd5b865163100960cb60e01b8152600881880152602490fd5b905060015414386100dd565b885163100960cb60e01b81526007818a0152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fdfe608060409080825260049182361015610020575b505050361561001e57005b005b600091823560e01c9081631e93b0f11461051a5750806383230757146104fc578063ab53f2c614610491578063ad10eb62146102345763c5ad5521036100135760603660031901126102305781815161007881610570565b526100823661069e565b92600283540361021a576100946105d7565b936100a96020958680825183010191016106e4565b60ff835416610203577f99d0576268bc0597b08348ce3a8c0a9c4dff75b1e20e1aad10265ffbaf6b08a98451806100e185338361071e565b0390a1815180159081156101f7575b50156101e057346101c9578051336001600160a01b03909116036101b25785015190838682015191015184519087820192835285820152848152610133816105bc565b5190200361019c57508180558160015561014e600254610536565b8061015b575b5051908152f35b601f81116001146101725750816002555b38610154565b6002835283832061018e91601f0160051c81019060010161074c565b81838120816002555561016c565b6013602492519163100960cb60e01b8352820152fd5b835163100960cb60e01b8152601281850152602490fd5b835163100960cb60e01b8152601181850152602490fd5b835163100960cb60e01b8152601081850152602490fd5b905060015414386100f0565b835163100960cb60e01b8152600f81850152602490fd5b600e602492519163100960cb60e01b8352820152fd5b5080fd5b5060603660031901126102305781815161024d81610570565b526102573661069e565b60018084540361047a576102696105d7565b9461027e6020968780825183010191016106e4565b9260ff825416610463577f4329eb2a4ca8e8172b6acbca2dc36eb7ab3ae9bcb3adcddab189f4af19f52b2d8551806102b784338361071e565b0390a1518015908115610458575b5015610441573461042a5783516102db816105a1565b85815286810186815284516001600160a01b031691829052938701518452600280875543845585518089019290925293518186015284815261031c816105bc565b8051916001600160401b03831161041757506103388454610536565b601f81116103de575b508690601f831160011461037f579282939183928894610374575b50501b916000199060031b1c19161790555b51908152f35b01519250388061035c565b848752878720919083601f198116895b8b888383106103c757505050106103ae575b505050811b01905561036e565b015160001960f88460031b161c191690553880806103a1565b86860151885590960195948501948793500161038f565b61040790858852888820601f850160051c8101918a861061040d575b601f0160051c019061074c565b38610341565b90915081906103fa565b634e487b7160e01b875260419052602486fd5b602490600d85519163100960cb60e01b8352820152fd5b602490600c85519163100960cb60e01b8352820152fd5b9050825414386102c5565b845163100960cb60e01b8152600b81840152602490fd5b825163100960cb60e01b8152600a81870152602490fd5b503461023057816003193601126102305781546104ac6105d7565b91805193849283526020828185015284518093850152815b8381106104e557505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016104c4565b50346102305781600319360112610230576020906001549051908152f35b8390346102305781600319360112610230576020906003548152f35b90600182811c92168015610566575b602083101461055057565b634e487b7160e01b600052602260045260246000fd5b91607f1691610545565b602081019081106001600160401b0382111761058b57604052565b634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761058b57604052565b606081019081106001600160401b0382111761058b57604052565b6040519060006002546105e981610536565b80855260019180831690811561067f5750600114610627575b5050829003601f01601f191682016001600160401b0381118382101761058b57604052565b600260009081526020935091837f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5b83851061066b57505050508301013880610602565b805488860183015293019284908201610656565b919250506020925060ff191682850152151560051b8301013880610602565b60609060031901126106df5760405190606082016001600160401b0381118382101761058b5760405281600435815260243560208201526040604435910152565b600080fd5b908160409103126106df57604051906106fc826105a1565b8051906001600160a01b03821682036106df5760209183520151602082015290565b9092916040606091608084019560018060a01b03168452805160208501526020810151828501520151910152565b818110610757575050565b6000815560010161074c56fea164736f6c6343000811000a`,
  BytecodeLen: 2690,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:60:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:68:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:80:9:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Anna": Anna,
  "Jack": Jack
  };
export const _APIs = {
  };
