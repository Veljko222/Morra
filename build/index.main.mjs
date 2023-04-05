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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      4: [ctc0, ctc1, ctc0],
      5: [ctc0, ctc1, ctc0, ctc2, ctc1],
      6: [ctc0, ctc1, ctc0, ctc2, ctc1, ctc1, ctc1]
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
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Null;
  
  
  const v132 = stdlib.protect(ctc0, interact.wager, 'for Anna\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v132],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:51:8:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v132, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v136], secs: v138, time: v137, didSend: v29, from: v135 } = txn1;
      
      sim_r.txns.push({
        amt: v136,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v136], secs: v138, time: v137, didSend: v29, from: v135 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v145, time: v144, didSend: v38, from: v143 } = txn2;
  ;
  let v148 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
  let v149 = v144;
  
  let txn3 = txn2;
  while (await (async () => {
    const v164 = stdlib.eq(v148, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    
    return v164;})()) {
    const v167 = stdlib.protect(ctc0, await interact.getHand(), {
      at: './index.rsh:68:41:application',
      fs: ['at ./index.rsh:67:14:application call to [unknown function] (defined at: ./index.rsh:67:18:function exp)'],
      msg: 'getHand',
      who: 'Anna'
      });
    const v168 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:64:31:application',
      fs: ['at ./index.rsh:69:54:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:67:14:application call to [unknown function] (defined at: ./index.rsh:67:18:function exp)'],
      msg: 'random',
      who: 'Anna'
      });
    const v169 = stdlib.digest([ctc0, ctc0], [v168, v167]);
    const v171 = stdlib.protect(ctc0, await interact.getGuess(), {
      at: './index.rsh:71:52:application',
      fs: ['at ./index.rsh:67:14:application call to [unknown function] (defined at: ./index.rsh:67:18:function exp)'],
      msg: 'getGuess',
      who: 'Anna'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v135, v136, v143, v169, v171],
      evt_cnt: 2,
      funcNum: 3,
      lct: v149,
      onlyIf: true,
      out_tys: [ctc1, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:74:10:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v173, v174], secs: v176, time: v175, didSend: v66, from: v172 } = txn4;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc2, ctc1, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v173, v174], secs: v176, time: v175, didSend: v66, from: v172 } = txn4;
    ;
    const v177 = stdlib.addressEq(v135, v172);
    stdlib.assert(v177, {
      at: './index.rsh:74:10:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Anna'
      });
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 4,
      out_tys: [ctc0, ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v183, v184], secs: v186, time: v185, didSend: v78, from: v182 } = txn5;
    ;
    const v187 = stdlib.addressEq(v143, v182);
    stdlib.assert(v187, {
      at: './index.rsh:82:10:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Anna'
      });
    const txn6 = await (ctc.sendrecv({
      args: [v135, v136, v143, v173, v174, v183, v184, v168, v167],
      evt_cnt: 2,
      funcNum: 5,
      lct: v185,
      onlyIf: true,
      out_tys: [ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:90:10:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v191, v192], secs: v194, time: v193, didSend: v88, from: v190 } = txn6;
        
        ;
        const v199 = stdlib.safeAdd(v192, v183);
        const v200 = stdlib.eq(v199, v174);
        const v201 = stdlib.eq(v174, v184);
        const v219 = v201 ? stdlib.checkedBigNumberify('./index.rsh:9:12:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:11:12:decimal', stdlib.UInt_max, '2');
        const v202 = stdlib.eq(v199, v184);
        const v220 = v202 ? stdlib.checkedBigNumberify('./index.rsh:15:12:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:17:12:decimal', stdlib.UInt_max, '1');
        const v198 = v200 ? v219 : v220;
        const cv148 = v198;
        const cv149 = v193;
        
        await (async () => {
          const v148 = cv148;
          const v149 = cv149;
          
          if (await (async () => {
            const v164 = stdlib.eq(v148, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            
            return v164;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v203 = stdlib.eq(v148, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
            const v206 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:100:10:decimal', stdlib.UInt_max, '2'), v136);
            const v208 = v203 ? v135 : v143;
            sim_r.txns.push({
              kind: 'from',
              to: v208,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc2, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v191, v192], secs: v194, time: v193, didSend: v88, from: v190 } = txn6;
    ;
    const v195 = stdlib.addressEq(v135, v190);
    stdlib.assert(v195, {
      at: './index.rsh:90:10:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Anna'
      });
    const v196 = stdlib.digest([ctc0, ctc0], [v191, v192]);
    const v197 = stdlib.digestEq(v173, v196);
    stdlib.assert(v197, {
      at: 'reach standard library:69:17:application',
      fs: ['at ./index.rsh:91:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
      msg: null,
      who: 'Anna'
      });
    const v199 = stdlib.safeAdd(v192, v183);
    const v200 = stdlib.eq(v199, v174);
    const v201 = stdlib.eq(v174, v184);
    const v219 = v201 ? stdlib.checkedBigNumberify('./index.rsh:9:12:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:11:12:decimal', stdlib.UInt_max, '2');
    const v202 = stdlib.eq(v199, v184);
    const v220 = v202 ? stdlib.checkedBigNumberify('./index.rsh:15:12:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:17:12:decimal', stdlib.UInt_max, '1');
    const v198 = v200 ? v219 : v220;
    const cv148 = v198;
    const cv149 = v193;
    
    v148 = cv148;
    v149 = cv149;
    
    txn3 = txn6;
    continue;
    
    
    
    
    
    }
  const v203 = stdlib.eq(v148, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
  const v206 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:100:10:decimal', stdlib.UInt_max, '2'), v136);
  const v208 = v203 ? v135 : v143;
  ;
  stdlib.protect(ctc3, await interact.seeOutcome(v148), {
    at: './index.rsh:104:24:application',
    fs: ['at ./index.rsh:103:7:application call to [unknown function] (defined at: ./index.rsh:103:25:function exp)'],
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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v136], secs: v138, time: v137, didSend: v29, from: v135 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v136), {
    at: './index.rsh:56:25:application',
    fs: ['at ./index.rsh:55:12:application call to [unknown function] (defined at: ./index.rsh:55:16:function exp)'],
    msg: 'acceptWager',
    who: 'Jack'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v135, v136],
    evt_cnt: 0,
    funcNum: 1,
    lct: v137,
    onlyIf: true,
    out_tys: [],
    pay: [v136, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v145, time: v144, didSend: v38, from: v143 } = txn2;
      
      sim_r.txns.push({
        amt: v136,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v148 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v149 = v144;
      
      if (await (async () => {
        const v164 = stdlib.eq(v148, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v164;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v203 = stdlib.eq(v148, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v206 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:100:10:decimal', stdlib.UInt_max, '2'), v136);
        const v208 = v203 ? v135 : v143;
        sim_r.txns.push({
          kind: 'from',
          to: v208,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v145, time: v144, didSend: v38, from: v143 } = txn2;
  ;
  let v148 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
  let v149 = v144;
  
  let txn3 = txn2;
  while (await (async () => {
    const v164 = stdlib.eq(v148, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    
    return v164;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 3,
      out_tys: [ctc2, ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v173, v174], secs: v176, time: v175, didSend: v66, from: v172 } = txn4;
    ;
    const v177 = stdlib.addressEq(v135, v172);
    stdlib.assert(v177, {
      at: './index.rsh:74:10:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Jack'
      });
    const v180 = stdlib.protect(ctc0, await interact.getHand(), {
      at: './index.rsh:79:51:application',
      fs: ['at ./index.rsh:78:14:application call to [unknown function] (defined at: ./index.rsh:78:18:function exp)'],
      msg: 'getHand',
      who: 'Jack'
      });
    const v181 = stdlib.protect(ctc0, await interact.getGuess(), {
      at: './index.rsh:80:53:application',
      fs: ['at ./index.rsh:78:14:application call to [unknown function] (defined at: ./index.rsh:78:18:function exp)'],
      msg: 'getGuess',
      who: 'Jack'
      });
    
    const txn5 = await (ctc.sendrecv({
      args: [v135, v136, v143, v173, v174, v180, v181],
      evt_cnt: 2,
      funcNum: 4,
      lct: v175,
      onlyIf: true,
      out_tys: [ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:82:10:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v183, v184], secs: v186, time: v185, didSend: v78, from: v182 } = txn5;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc3, ctc2, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v183, v184], secs: v186, time: v185, didSend: v78, from: v182 } = txn5;
    ;
    const v187 = stdlib.addressEq(v143, v182);
    stdlib.assert(v187, {
      at: './index.rsh:82:10:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Jack'
      });
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 5,
      out_tys: [ctc0, ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v191, v192], secs: v194, time: v193, didSend: v88, from: v190 } = txn6;
    ;
    const v195 = stdlib.addressEq(v135, v190);
    stdlib.assert(v195, {
      at: './index.rsh:90:10:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Jack'
      });
    const v196 = stdlib.digest([ctc0, ctc0], [v191, v192]);
    const v197 = stdlib.digestEq(v173, v196);
    stdlib.assert(v197, {
      at: 'reach standard library:69:17:application',
      fs: ['at ./index.rsh:91:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
      msg: null,
      who: 'Jack'
      });
    const v199 = stdlib.safeAdd(v192, v183);
    const v200 = stdlib.eq(v199, v174);
    const v201 = stdlib.eq(v174, v184);
    const v219 = v201 ? stdlib.checkedBigNumberify('./index.rsh:9:12:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:11:12:decimal', stdlib.UInt_max, '2');
    const v202 = stdlib.eq(v199, v184);
    const v220 = v202 ? stdlib.checkedBigNumberify('./index.rsh:15:12:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:17:12:decimal', stdlib.UInt_max, '1');
    const v198 = v200 ? v219 : v220;
    const cv148 = v198;
    const cv149 = v193;
    
    v148 = cv148;
    v149 = cv149;
    
    txn3 = txn6;
    continue;
    
    
    
    
    
    }
  const v203 = stdlib.eq(v148, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
  const v206 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:100:10:decimal', stdlib.UInt_max, '2'), v136);
  const v208 = v203 ? v135 : v143;
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v148), {
    at: './index.rsh:104:24:application',
    fs: ['at ./index.rsh:103:7:application call to [unknown function] (defined at: ./index.rsh:103:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Jack'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`_reachp_0((uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,digest,uint64))void`, `_reachp_4((uint64,uint64,uint64))void`, `_reachp_5((uint64,uint64,uint64))void`],
    pure: [],
    sigs: [`_reachp_0((uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,digest,uint64))void`, `_reachp_4((uint64,uint64,uint64))void`, `_reachp_5((uint64,uint64,uint64))void`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAKAAEIIBAFAgRoBiYDAAEAAQExGEECmShkSSJbNQEkWzUCKWQqZFCCBQRSVv2sBIY0RmwEpRDNbQTf2SMoBPyGjZg2GgCOBQIfAkkCVAIzAj4AMQA1FzQLIls1DDQLJFs1FoAErNEfwzQMFlA0FhZQsDQMiAKyNBaIArc0FzQWFlCBWK9QIzIGNQI1ASlLAVcAf2cqTFd/AWcoNAEWNAIWUGcxGSISRIgCpDQDQAAKgAQVH3x1NARQsCNDMQA1FSM0ARJESVcAIDUXJVs1FjQLFzUMgATVFRkUNAwWULA0DIgCRTQWiAJKIzIGNRM1FDQUIxJBAeM0FzQWFlA0FVCBOK9QIQcyBkL/fiEHNAESRElXACA1F0klWzUWVyggNRU0CyJbNQw0C1cIIDUSNAuBKFs1EYAECfYAGzQMFlA0ElA0ERZQsDQMiAHdNBcxABJENBc0FhZQNBVQNBJQNBEWUCEEr1AhBTIGQv8cIQU0ARJESVcAIDUXSSVbNRZJVyggNRVJV0ggNRIhCFs1ETQLIls1DDQLJFs1EDQLIQRbNQ+ABBIIgdw0DBZQNBAWUDQPFlCwNAyIAW80FTEAEkQ0FzQWFlA0FVA0ElA0ERZQNBAWUDQPFlAhCTIGQv6qIQk0ARJESVcAIDUXSSVbNRZJVyggNRVJV0ggNRJJIQhbNRFJgXBbNRCBeFs1DzQLIls1DDQLJFs1DjQLIQRbNQ2ABFRAvA40DBZQNA4WUDQNFlCwNAyIAPE0FzEAEkQ0EjQOFjQNFlABEkQ0DTQQCDULIyI0CzQPEk0hBiM0ETQPEk00CzQREk0yBjUTNRRC/n+IALGBoI0GNAYINQY2GgE1C0L9zogAnTYaATULQv4siACSNhoBNQtC/nCIAIc2GgE1C0L+x4gAfDYaATULQv8uIjE0EkSBAzE1EkQiMTYSRCIxNxJEiABcgYABryIiQv23MRkiEkRC/dYhBjQWCzQVNBc0FCEGEk2IAG8xGSEFEkSIAFoiMgoyCYgAYkL9qyKyASOyELIHsgiziUiJTAlJNQYyCYgAQ4kJSUH/7kk1BogAD4kjNQOJSSISTDQCEhFEiTEWNAAjCEk1AAlHAjgHMgoSRDgQIxJEOAgSRIk0BjQHSg9B/7ZC/76xQv+hsbIJQv+b`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `37`,
    101: `37`,
    102: `37`,
    103: `37`,
    104: `37`,
    105: `37`,
    106: `38`,
    107: `38`,
    108: `39`,
    109: `40`,
    11: `2`,
    110: `41`,
    111: `41`,
    112: `42`,
    113: `43`,
    114: `44`,
    115: `46`,
    116: `46`,
    117: `47`,
    118: `47`,
    119: `47`,
    12: `2`,
    120: `48`,
    121: `48`,
    122: `49`,
    123: `49`,
    124: `49`,
    125: `53`,
    126: `53`,
    127: `54`,
    128: `54`,
    129: `55`,
    13: `2`,
    130: `56`,
    131: `57`,
    132: `57`,
    133: `58`,
    134: `59`,
    135: `60`,
    136: `61`,
    137: `61`,
    138: `63`,
    139: `63`,
    14: `2`,
    140: `64`,
    141: `64`,
    142: `65`,
    143: `66`,
    144: `66`,
    145: `67`,
    146: `67`,
    147: `67`,
    148: `68`,
    149: `69`,
    15: `2`,
    150: `70`,
    151: `71`,
    152: `71`,
    153: `71`,
    154: `72`,
    155: `73`,
    156: `74`,
    157: `74`,
    158: `75`,
    159: `76`,
    16: `2`,
    160: `76`,
    161: `77`,
    162: `78`,
    163: `79`,
    164: `80`,
    165: `80`,
    166: `81`,
    167: `82`,
    168: `83`,
    169: `85`,
    17: `2`,
    170: `85`,
    171: `85`,
    172: `87`,
    173: `87`,
    174: `88`,
    175: `88`,
    176: `88`,
    177: `90`,
    178: `90`,
    179: `90`,
    18: `2`,
    180: `90`,
    181: `90`,
    182: `90`,
    183: `91`,
    184: `91`,
    185: `92`,
    186: `93`,
    187: `95`,
    188: `96`,
    189: `98`,
    19: `2`,
    190: `98`,
    191: `99`,
    192: `99`,
    193: `100`,
    194: `101`,
    195: `101`,
    196: `102`,
    197: `103`,
    198: `105`,
    199: `106`,
    2: `2`,
    20: `4`,
    200: `106`,
    201: `106`,
    202: `107`,
    203: `107`,
    204: `108`,
    205: `109`,
    206: `110`,
    207: `110`,
    208: `111`,
    209: `111`,
    21: `4`,
    210: `112`,
    211: `113`,
    212: `113`,
    213: `114`,
    214: `114`,
    215: `114`,
    216: `114`,
    217: `114`,
    218: `114`,
    219: `115`,
    22: `5`,
    220: `115`,
    221: `116`,
    222: `117`,
    223: `118`,
    224: `120`,
    225: `120`,
    226: `121`,
    227: `121`,
    228: `121`,
    229: `122`,
    23: `5`,
    230: `122`,
    231: `123`,
    232: `123`,
    233: `123`,
    234: `126`,
    235: `127`,
    236: `127`,
    237: `128`,
    238: `128`,
    239: `129`,
    24: `5`,
    240: `129`,
    241: `131`,
    242: `131`,
    243: `132`,
    244: `133`,
    245: `134`,
    246: `134`,
    247: `134`,
    248: `136`,
    249: `136`,
    25: `6`,
    250: `137`,
    251: `137`,
    252: `138`,
    253: `139`,
    254: `140`,
    255: `140`,
    256: `141`,
    257: `142`,
    258: `142`,
    259: `143`,
    26: `7`,
    260: `144`,
    261: `145`,
    262: `145`,
    263: `146`,
    264: `146`,
    265: `147`,
    266: `147`,
    267: `147`,
    268: `149`,
    269: `149`,
    27: `8`,
    270: `150`,
    271: `150`,
    272: `151`,
    273: `152`,
    274: `154`,
    275: `155`,
    276: `155`,
    277: `155`,
    278: `156`,
    279: `156`,
    28: `9`,
    280: `157`,
    281: `158`,
    282: `159`,
    283: `160`,
    284: `160`,
    285: `161`,
    286: `161`,
    287: `161`,
    288: `162`,
    289: `162`,
    29: `10`,
    290: `163`,
    291: `163`,
    292: `164`,
    293: `165`,
    294: `166`,
    295: `166`,
    296: `167`,
    297: `167`,
    298: `168`,
    299: `168`,
    3: `2`,
    30: `11`,
    300: `168`,
    301: `169`,
    302: `169`,
    303: `170`,
    304: `170`,
    305: `171`,
    306: `171`,
    307: `172`,
    308: `173`,
    309: `173`,
    31: `11`,
    310: `174`,
    311: `174`,
    312: `174`,
    313: `174`,
    314: `174`,
    315: `174`,
    316: `175`,
    317: `175`,
    318: `176`,
    319: `177`,
    32: `12`,
    320: `178`,
    321: `178`,
    322: `179`,
    323: `180`,
    324: `180`,
    325: `181`,
    326: `182`,
    327: `183`,
    328: `185`,
    329: `185`,
    33: `13`,
    330: `186`,
    331: `186`,
    332: `186`,
    333: `187`,
    334: `187`,
    335: `188`,
    336: `188`,
    337: `189`,
    338: `190`,
    339: `194`,
    34: `14`,
    340: `194`,
    341: `195`,
    342: `195`,
    343: `196`,
    344: `197`,
    345: `198`,
    346: `198`,
    347: `199`,
    348: `200`,
    349: `200`,
    35: `14`,
    350: `201`,
    351: `202`,
    352: `202`,
    353: `203`,
    354: `204`,
    355: `205`,
    356: `205`,
    357: `206`,
    358: `207`,
    359: `208`,
    36: `15`,
    360: `208`,
    361: `209`,
    362: `209`,
    363: `210`,
    364: `210`,
    365: `210`,
    366: `212`,
    367: `212`,
    368: `213`,
    369: `213`,
    37: `16`,
    370: `214`,
    371: `215`,
    372: `217`,
    373: `218`,
    374: `218`,
    375: `218`,
    376: `219`,
    377: `219`,
    378: `220`,
    379: `221`,
    38: `17`,
    380: `222`,
    381: `223`,
    382: `223`,
    383: `224`,
    384: `225`,
    385: `225`,
    386: `225`,
    387: `226`,
    388: `226`,
    389: `227`,
    39: `18`,
    390: `228`,
    391: `228`,
    392: `228`,
    393: `229`,
    394: `229`,
    395: `230`,
    396: `230`,
    397: `231`,
    398: `232`,
    399: `232`,
    4: `2`,
    40: `19`,
    400: `233`,
    401: `233`,
    402: `234`,
    403: `235`,
    404: `236`,
    405: `236`,
    406: `237`,
    407: `237`,
    408: `238`,
    409: `239`,
    41: `21`,
    410: `240`,
    411: `240`,
    412: `241`,
    413: `241`,
    414: `242`,
    415: `242`,
    416: `243`,
    417: `244`,
    418: `244`,
    419: `245`,
    42: `21`,
    420: `245`,
    421: `245`,
    422: `245`,
    423: `245`,
    424: `245`,
    425: `246`,
    426: `246`,
    427: `247`,
    428: `248`,
    429: `249`,
    43: `21`,
    430: `249`,
    431: `250`,
    432: `251`,
    433: `252`,
    434: `252`,
    435: `253`,
    436: `254`,
    437: `255`,
    438: `257`,
    439: `257`,
    44: `21`,
    440: `258`,
    441: `258`,
    442: `258`,
    443: `259`,
    444: `259`,
    445: `260`,
    446: `260`,
    447: `261`,
    448: `262`,
    449: `266`,
    45: `21`,
    450: `266`,
    451: `267`,
    452: `267`,
    453: `268`,
    454: `269`,
    455: `270`,
    456: `270`,
    457: `271`,
    458: `272`,
    459: `272`,
    46: `21`,
    460: `273`,
    461: `274`,
    462: `274`,
    463: `275`,
    464: `276`,
    465: `277`,
    466: `277`,
    467: `278`,
    468: `279`,
    469: `280`,
    47: `21`,
    470: `280`,
    471: `281`,
    472: `282`,
    473: `283`,
    474: `283`,
    475: `284`,
    476: `284`,
    477: `285`,
    478: `285`,
    479: `285`,
    48: `21`,
    480: `287`,
    481: `287`,
    482: `288`,
    483: `288`,
    484: `289`,
    485: `290`,
    486: `292`,
    487: `293`,
    488: `293`,
    489: `293`,
    49: `21`,
    490: `294`,
    491: `294`,
    492: `295`,
    493: `296`,
    494: `297`,
    495: `298`,
    496: `298`,
    497: `299`,
    498: `300`,
    499: `300`,
    5: `2`,
    50: `21`,
    500: `300`,
    501: `301`,
    502: `301`,
    503: `302`,
    504: `303`,
    505: `303`,
    506: `303`,
    507: `304`,
    508: `304`,
    509: `305`,
    51: `21`,
    510: `306`,
    511: `306`,
    512: `307`,
    513: `308`,
    514: `308`,
    515: `309`,
    516: `310`,
    517: `310`,
    518: `311`,
    519: `312`,
    52: `21`,
    520: `312`,
    521: `313`,
    522: `313`,
    523: `314`,
    524: `315`,
    525: `315`,
    526: `316`,
    527: `316`,
    528: `317`,
    529: `318`,
    53: `21`,
    530: `319`,
    531: `319`,
    532: `320`,
    533: `320`,
    534: `321`,
    535: `322`,
    536: `323`,
    537: `323`,
    538: `324`,
    539: `324`,
    54: `21`,
    540: `325`,
    541: `325`,
    542: `326`,
    543: `327`,
    544: `327`,
    545: `328`,
    546: `328`,
    547: `328`,
    548: `328`,
    549: `328`,
    55: `21`,
    550: `328`,
    551: `329`,
    552: `329`,
    553: `330`,
    554: `331`,
    555: `332`,
    556: `332`,
    557: `333`,
    558: `334`,
    559: `335`,
    56: `21`,
    560: `335`,
    561: `336`,
    562: `337`,
    563: `338`,
    564: `340`,
    565: `340`,
    566: `341`,
    567: `341`,
    568: `341`,
    569: `342`,
    57: `21`,
    570: `342`,
    571: `343`,
    572: `343`,
    573: `344`,
    574: `345`,
    575: `348`,
    576: `348`,
    577: `349`,
    578: `349`,
    579: `350`,
    58: `21`,
    580: `351`,
    581: `351`,
    582: `352`,
    583: `353`,
    584: `354`,
    585: `355`,
    586: `356`,
    587: `360`,
    588: `360`,
    589: `361`,
    59: `21`,
    590: `361`,
    591: `362`,
    592: `363`,
    593: `363`,
    594: `364`,
    595: `365`,
    596: `366`,
    597: `366`,
    598: `367`,
    599: `367`,
    6: `2`,
    60: `21`,
    600: `368`,
    601: `369`,
    602: `370`,
    603: `370`,
    604: `371`,
    605: `372`,
    606: `372`,
    607: `373`,
    608: `373`,
    609: `374`,
    61: `21`,
    610: `375`,
    611: `376`,
    612: `376`,
    613: `377`,
    614: `377`,
    615: `378`,
    616: `379`,
    617: `380`,
    618: `380`,
    619: `381`,
    62: `21`,
    620: `381`,
    621: `382`,
    622: `382`,
    623: `383`,
    624: `383`,
    625: `383`,
    626: `385`,
    627: `385`,
    628: `385`,
    629: `386`,
    63: `21`,
    630: `386`,
    631: `386`,
    632: `386`,
    633: `388`,
    634: `388`,
    635: `389`,
    636: `390`,
    637: `390`,
    638: `391`,
    639: `391`,
    64: `21`,
    640: `391`,
    641: `392`,
    642: `392`,
    643: `393`,
    644: `393`,
    645: `393`,
    646: `395`,
    647: `395`,
    648: `395`,
    649: `396`,
    65: `21`,
    650: `396`,
    651: `396`,
    652: `397`,
    653: `397`,
    654: `398`,
    655: `398`,
    656: `398`,
    657: `400`,
    658: `400`,
    659: `400`,
    66: `21`,
    660: `401`,
    661: `401`,
    662: `401`,
    663: `402`,
    664: `402`,
    665: `403`,
    666: `403`,
    667: `403`,
    668: `405`,
    669: `405`,
    67: `21`,
    670: `405`,
    671: `406`,
    672: `406`,
    673: `406`,
    674: `407`,
    675: `407`,
    676: `408`,
    677: `408`,
    678: `408`,
    679: `410`,
    68: `22`,
    680: `410`,
    681: `410`,
    682: `411`,
    683: `411`,
    684: `411`,
    685: `412`,
    686: `412`,
    687: `413`,
    688: `413`,
    689: `413`,
    69: `22`,
    690: `415`,
    691: `416`,
    692: `416`,
    693: `417`,
    694: `418`,
    695: `419`,
    696: `419`,
    697: `420`,
    698: `420`,
    699: `421`,
    7: `2`,
    70: `22`,
    700: `422`,
    701: `423`,
    702: `424`,
    703: `424`,
    704: `425`,
    705: `426`,
    706: `427`,
    707: `428`,
    708: `428`,
    709: `429`,
    71: `23`,
    710: `430`,
    711: `431`,
    712: `431`,
    713: `431`,
    714: `432`,
    715: `432`,
    716: `432`,
    717: `433`,
    718: `434`,
    719: `435`,
    72: `23`,
    720: `436`,
    721: `436`,
    722: `436`,
    723: `438`,
    724: `438`,
    725: `439`,
    726: `440`,
    727: `441`,
    728: `443`,
    729: `443`,
    73: `23`,
    730: `443`,
    731: `445`,
    732: `445`,
    733: `446`,
    734: `446`,
    735: `447`,
    736: `449`,
    737: `449`,
    738: `450`,
    739: `450`,
    74: `23`,
    740: `451`,
    741: `451`,
    742: `452`,
    743: `452`,
    744: `453`,
    745: `454`,
    746: `455`,
    747: `455`,
    748: `455`,
    749: `457`,
    75: `23`,
    750: `457`,
    751: `458`,
    752: `458`,
    753: `459`,
    754: `460`,
    755: `462`,
    756: `462`,
    757: `462`,
    758: `464`,
    759: `465`,
    76: `23`,
    760: `465`,
    761: `466`,
    762: `466`,
    763: `467`,
    764: `467`,
    765: `467`,
    766: `468`,
    767: `468`,
    768: `468`,
    769: `470`,
    77: `23`,
    770: `471`,
    771: `471`,
    772: `472`,
    773: `473`,
    774: `473`,
    775: `474`,
    776: `474`,
    777: `475`,
    778: `475`,
    779: `476`,
    78: `23`,
    780: `477`,
    781: `479`,
    782: `480`,
    783: `482`,
    784: `483`,
    785: `484`,
    786: `485`,
    787: `485`,
    788: `486`,
    789: `486`,
    79: `23`,
    790: `487`,
    791: `487`,
    792: `487`,
    793: `488`,
    794: `490`,
    795: `491`,
    796: `492`,
    797: `492`,
    798: `492`,
    799: `493`,
    8: `2`,
    80: `23`,
    800: `494`,
    801: `494`,
    802: `495`,
    803: `495`,
    804: `495`,
    805: `496`,
    806: `498`,
    807: `499`,
    808: `499`,
    809: `500`,
    81: `23`,
    810: `502`,
    811: `503`,
    812: `504`,
    813: `505`,
    814: `506`,
    815: `506`,
    816: `507`,
    817: `508`,
    818: `509`,
    819: `510`,
    82: `23`,
    820: `513`,
    821: `513`,
    822: `514`,
    823: `514`,
    824: `515`,
    825: `516`,
    826: `517`,
    827: `518`,
    828: `518`,
    829: `519`,
    83: `25`,
    830: `520`,
    831: `520`,
    832: `521`,
    833: `521`,
    834: `522`,
    835: `522`,
    836: `523`,
    837: `524`,
    838: `525`,
    839: `525`,
    84: `27`,
    840: `526`,
    841: `527`,
    842: `528`,
    843: `529`,
    844: `529`,
    845: `530`,
    846: `531`,
    847: `532`,
    848: `534`,
    849: `534`,
    85: `27`,
    850: `535`,
    851: `535`,
    852: `536`,
    853: `537`,
    854: `538`,
    855: `538`,
    856: `538`,
    857: `539`,
    858: `539`,
    859: `539`,
    86: `28`,
    860: `541`,
    861: `542`,
    862: `542`,
    863: `542`,
    864: `544`,
    865: `545`,
    866: `545`,
    867: `546`,
    87: `28`,
    88: `29`,
    89: `29`,
    9: `2`,
    90: `30`,
    91: `31`,
    92: `32`,
    93: `32`,
    94: `33`,
    95: `33`,
    96: `34`,
    97: `35`,
    98: `36`,
    99: `36`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 2,
  stateSize: 128,
  unsupported: [],
  version: 13,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T0","name":"v307","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v310","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T4","name":"v313","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T7","name":"v316","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T7","name":"v319","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6200148760806001600160401b03601f1938849003601f8101821684019084821084831117620002e35780859160409788948552833981010312620002f9578351926200004c84620002fe565b80518452602080910151908085019182524360035585519080820182811086821117620002e3578752600080925260049560ff875416620002cc577f6de3f97962105ba8e929dd0da178e54f00336c9ea6154699025bad3d4f17547f6060895133815283518582015286518b820152a1518015908115620002bf575b5015620002a857825134036200029157865192620000e684620002fe565b818401938385523390525183526001958683554387558751933383860152518885015287845260608401848110878211176200027e57885283519586116200026b57600254908782811c9216801562000260575b838310146200024d5750601f811162000201575b508093601f861160011462000199575050918394918493946200018d575b50501b916000199060031b1c1916176002555b5161116c90816200031b8239f35b0151925038806200016c565b600283528183209493928692918316915b88838310620001e65750505010620001cc575b505050811b016002556200017f565b015160001960f88460031b161c19169055388080620001bd565b858701518855909601959485019487935090810190620001aa565b60028352818320601f870160051c81019183881062000242575b601f0160051c019087905b828110620002365750506200014e565b84815501879062000226565b90915081906200021b565b634e487b7160e01b845260229052602483fd5b91607f16916200013a565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b865163100960cb60e01b8152600981880152602490fd5b865163100960cb60e01b8152600881880152602490fd5b90506001541438620000c8565b875163100960cb60e01b8152600781890152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b604081019081106001600160401b03821117620002e35760405256fe608080604052600436101561001a575b50361561001857005b005b60003560e01c90816309e682bd14610bce575080631e93b0f114610bb0578063573b85101461090d57806383230757146108ef5780639ae0b4ea146103f9578063ab53f2c6146103855763d55c0f2514610074573861000f565b606036600319011261036757600060405161008e81610f4c565b52610098366110f0565b60046000540361036c576100aa610fd3565b9060608280518101031261036757604051916100c583610f9d565b6020926100d384830161109a565b81526100ec60606040840151938684019485520161109a565b926040820193845260ff6004541661034e577f6536fd322fdcd7dfde57949b8be4cb5b2332e3a036f63d6dd8b608e1c1b9d6576040518061012e843383611131565b0390a180518015908115610342575b501561032957346103105781516001600160a01b039033908216036102f75780806101666110ae565b945116948585525195878501968752511660408401908152608060408885015194606087019586520151940193845260056000556001954387556040519588870152516040860152511660608401525160808301525160a082015260a0815260c081019060018060401b0391818110838211176102e15760405280519182116102e1576101f4600254610f12565b601f81116102a5575b508390601f831160011461024057928293918392600094610235575b50501b916000199060031b1c1916176002555b60405160008152f35b015192503880610219565b90601f19831691600260005283866000209360005b888883831061028e5750505010610275575b505050811b0160025561022c565b015160001960f88460031b161c19169055388080610267565b868601518855909601959485019487935001610255565b6102d190600260005285600020601f850160051c8101918786106102d7575b601f0160051c01906110d9565b386101fd565b90915081906102c4565b634e487b7160e01b600052604160045260246000fd5b60405163100960cb60e01b815260126004820152602490fd5b60405163100960cb60e01b815260116004820152602490fd5b60405163100960cb60e01b815260106004820152602490fd5b9050600154143861013d565b60405163100960cb60e01b8152600f6004820152602490fd5b600080fd5b60405163100960cb60e01b8152600e6004820152602490fd5b34610367576000366003190112610367576000546103a1610fd3565b6040519182528160206040818301528251908160408401526000935b8285106103e0575050606092506000838284010152601f80199101168101030190f35b84810182015186860160600152938101938593506103bd565b60608060031936011261036757600060405161041481610f4c565b5261041e366110f0565b60405161042a81610f4c565b600081526006600054036108d657610440610fd3565b9260e084805181010312610367576040519361045b85610f82565b60209461046986830161109a565b8152604082015186820190815261048184840161109a565b906040830191825260808401519385840194855260a0810151906080850191825260e060c08201519160a0870192835201519860c08601998a5260ff600454166108bd577fe08423f8b0978cce2889120e943ab86cf4100202bfc09734b904f0619cf97ef5604051806104f5843383611131565b0390a1805180159081156108b1575b5015610898573461087f5785516001600160a01b0397903390891603610866575160408c8301519201918c835160405191820192835260408201526040815261054c81610f9d565b5190200361084d5751905181019081811161080e578110610367578752846105726110ae565b945116918285525190858a86019483865251169860408601988a8a52519151918281146000146108325750510361082b5760015b915b8287860152436080860152600198898414600014610716575050505082604051956105d287610f9d565b6000875288870192600084528260408901956000875251168098525183525116825260046000554386556040519487860152516040850152511681830152815261061b81610fb8565b8051906001600160401b0382116102e157610637600254610f12565b601f81116106e5575b508390601f8311600114610681579282939183926000946106765750501b916000199060031b1c19161760025560405160008152f35b015192508580610219565b90601f19831691600260005283866000209360005b88888383106106ce57505050106106b557505050811b0160025561022c565b015160001960f88460031b161c19169055838080610267565b868601518855909601959485019487935001610696565b61071090600260005285600020601f850160051c8101918786106102d757601f0160051c01906110d9565b84610640565b935093509394509450600280951460001461082457505b60009180159081156107d1575b501561036757600092839283928392839183156107c7575b1690f1156107bb57600080556000825561076c8154610f12565b918261077b575b50505061022c565b82601f60009411600114610795575050555b818080610773565b6107af91838552601f868620920160051c820191016110d9565b8183812091555561078d565b6040513d6000823e3d90fd5b6108fc9250610752565b90925080861b906001600160ff1b038116810361080e5781936107f857859104148761073a565b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b905061072d565b60026105a6565b915051146000146108465760005b916105a8565b6001610840565b60405163100960cb60e01b8152601d6004820152602490fd5b60405163100960cb60e01b8152601c6004820152602490fd5b60405163100960cb60e01b8152601b6004820152602490fd5b60405163100960cb60e01b8152601a6004820152602490fd5b9050600154148c610504565b60405163100960cb60e01b815260196004820152602490fd5b60405163100960cb60e01b815260186004820152602490fd5b34610367576000366003190112610367576020600154604051908152f35b60208060031936011261036757600060405161092881610f4c565b5260405161093581610f4c565b60043581526001908160005403610b975761094e610fd3565b9060408280518101031261036757604080516001600160401b03939091820190848211838310176102e157604091825261098987820161109a565b835201519185820192835260ff60045416610b7e577fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee8159660408051338152835189820152a1518015908115610b73575b5015610b5a5781513403610b41576109ee6110ae565b9160018060a01b03809251168352519185810192835260408101923384528560608301524360808301528260405194610a2686610f9d565b60008652888601926000845282604088019560008752511680975251835251168252600460005543865560405193878501525160408401525116606082015260608152610a7281610fb8565b80519182116102e157610a86600254610f12565b601f8111610b10575b508390601f8311600114610ac5579282939183926000946106765750501b916000199060031b1c19161760025560405160008152f35b90601f19831691600260005283866000209360005b8888838310610af957505050106106b557505050811b0160025561022c565b868601518855909601959485019487935001610ada565b610b3b90600260005285600020601f850160051c8101918786106102d757601f0160051c01906110d9565b84610a8f565b60405163100960cb60e01b8152600d6004820152602490fd5b60405163100960cb60e01b8152600c6004820152602490fd5b9050845414866109d8565b60405163100960cb60e01b8152600b6004820152602490fd5b60405163100960cb60e01b8152600a6004820152602490fd5b34610367576000366003190112610367576020600354604051908152f35b60603660031901126103675780610be6600092610f4c565b52610bf0366110f0565b600560005403610ef957610c02610fd3565b9060a08280518101031261036757604051610c1c81610f67565b60a0602093610c2c85820161109a565b8352604081015185840152610c436060820161109a565b6040840152608081015160608401520151608082015260ff60045416610ee0577f03bed868a4e5740c3b9ad3749eb2622bf697e66bb923e3bfba52d025f3c9e85160405180610c93853383611131565b0390a181518015908115610ed4575b5015610ebb5734610ea2576040810151336001600160a01b0390911603610e89576040805192610cd184610f82565b600084526000858501526000828501526000606085015260006080850152600060a0850152600060c0850152608060018060a01b0384511693848652868101518787015260018060a01b0384820151168487015260608101516060870152015160808501528481015160a0850152015160c0830152600660005560c0600192438455604051928584015284810151604084015260018060a01b03604082015116606084015260608101516080840152608081015160a084015260a081015182840152015160e082015260e0815261010081019060018060401b0391818110838211176102e15760405280519182116102e157610dce600254610f12565b601f8111610e58575b508390601f8311600114610e0d579282939183926000946106765750501b916000199060031b1c19161760025560405160008152f35b90601f19831691600260005283866000209360005b8888838310610e4157505050106106b557505050811b0160025561022c565b868601518855909601959485019487935001610e22565b610e8390600260005285600020601f850160051c8101918786106102d757601f0160051c01906110d9565b84610dd7565b60405163100960cb60e01b815260176004820152602490fd5b60405163100960cb60e01b815260166004820152602490fd5b60405163100960cb60e01b815260156004820152602490fd5b90506001541484610ca2565b60405163100960cb60e01b815260146004820152602490fd5b60405163100960cb60e01b815260136004820152602490fd5b90600182811c92168015610f42575b6020831014610f2c57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610f21565b602081019081106001600160401b038211176102e157604052565b60a081019081106001600160401b038211176102e157604052565b60e081019081106001600160401b038211176102e157604052565b606081019081106001600160401b038211176102e157604052565b608081019081106001600160401b038211176102e157604052565b604051906000600254610fe581610f12565b80855260019180831690811561107b5750600114611023575b5050829003601f01601f191682016001600160401b038111838210176102e157604052565b600260009081526020935091837f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5b83851061106757505050508301013880610ffe565b805488860183015293019284908201611052565b919250506020925060ff191682850152151560051b8301013880610ffe565b51906001600160a01b038216820361036757565b604051906110bb82610f67565b60006080838281528260208201528260408201528260608201520152565b8181106110e4575050565b600081556001016110d9565b60609060031901126103675760405190606082016001600160401b038111838210176102e15760405281600435815260243560208201526040604435910152565b9092916040606091608084019560018060a01b0316845280516020850152602081015182850152015191015256fea164736f6c6343000811000a`,
  BytecodeLen: 5255,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:53:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:101:9:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:65:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:75:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:83:13:after expr stmt semicolon',
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
