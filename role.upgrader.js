var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
        var upgrade = false;
        if(creep.carry.energy == creep.carryCapacity){
            upgrade = true;
        }else if(creep.carry.energy == 0){
            upgrade = false;
        }

	    if(upgrade) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
        else {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
	}
};

module.exports = roleUpgrader;