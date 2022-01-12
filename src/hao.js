/** @param {import('../NetscriptDefinitions').NS} ns */
export const main = async ns => {
	if(!ns.args[0]) { throw Error('缺少主机参数[chick]'); }

	ns.disableLog('ALL');


	const chick = ns.args[0];
	ns.print(`-------薅诈电子货币 [${chick}]-------`);


	const threshSecurity = await ns.getServerMinSecurityLevel(chick) + 4;
	ns.print(`[${chick}]安保等级（阈值）：`, threshSecurity);
	ns.print(`[${chick}]安保等级（当前）：`, (await ns.getServerSecurityLevel(chick).toFixed(2)));

	const threshMoney = await ns.getServerMaxMoney(chick) * 0.7;
	ns.print(`[${chick}]电子货币（阈值）：`, threshMoney);
	ns.print(`[${chick}]电子货币（当前）：`, (await ns.getServerMoneyAvailable(chick).toFixed(2)));


	// eslint-disable-next-line no-constant-condition
	while(true) {
		if(await ns.getServerSecurityLevel(chick) > threshSecurity) {
			ns.print(`[${chick}]安保等级（弱化）：`, (await ns.weaken(chick)).toFixed(2));
			ns.print(`[${chick}]安保等级（当前）：`, (await ns.getServerSecurityLevel(chick).toFixed(2)));
		}
		else if(await ns.getServerMoneyAvailable(chick) < threshMoney) {
			ns.print(`[${chick}]电子货币（拉升）：`, (await ns.grow(chick)).toFixed(2));
			ns.print(`[${chick}]电子货币（当前）：`, (await ns.getServerMoneyAvailable(chick).toFixed(2)));
		}
		else {
			ns.print(`[${chick}]电子货币（薅诈）：`, (await ns.hack(chick)).toFixed(2));
		}
	}
};