/** @param {import('../NetscriptDefinitions').NS} ns */
export const main = async ns => {
	if(!ns.args[0]) { throw Error('缺少主机参数[chick]'); }

	ns.disableLog('ALL');


	const chick = ns.args[0];
	ns.print(`-------拉升电子货币 [${chick}]-------`);


	const threshMoney = await ns.getServerMaxMoney(chick) * 0.7;
	ns.print(`[${chick}]电子货币（阈值）：`, threshMoney);
	ns.print(`[${chick}]电子货币（当前）：`, (await ns.getServerMoneyAvailable(chick).toFixed(2)));

ns.write
	// eslint-disable-next-line no-constant-condition
	while(true) {
		if(await ns.getServerMoneyAvailable(chick) < threshMoney) {
			ns.print(`[${chick}]电子货币（拉升）：`, (await ns.grow(chick)).toFixed(2));
			ns.print(`[${chick}]电子货币（当前）：`, (await ns.getServerMoneyAvailable(chick).toFixed(2)));
		}
		else {
			ns.print(`拉升 [${chick}]电子货币 完成！`);
			break;
		}
	}
};