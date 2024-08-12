cc.Class({
    extends: cc.Component,

    properties: {
        speed: 300, // 공의 속도
    },

    onLoad() {
        // 공의 초기 속도 설정
        this.direction = cc.v2(Math.random() > 0.5 ? 1 : -1, Math.random() > 0.5 ? 1 : -1).normalize();
        seed_string = "M1LFMTApAyJxAUA78CUNAyDTISNL5AZfAlIaEDNTdwUUVQOVgxWH8yCigxINIlHa4RCT4TFsgyNokyDnAwQBwDIp8ANVhRDRpkGLhFCDcSUkwiAVhQEB4HGlgyLUFyIalwLbAhT3ABWzwiAsMSUM4TLUIQJFsBI4glJgAxSK4lPxk1DRllFRE1FA9yaEciEr8wXNIjWGggFRNSL9AyKCQDKH4wJI0GAx8FEPwVWy8wVTsyYeFiJKcVBCkiOXQxByhhHqAzDhgAOKIBA7EkIcIwMEgBKkkCCrUDQUESHEIxITMxJpgBILdCCDIiNZhCKvkTF5IHCOgxL541G-8yUHARTW0yDahyLtMDBbcSJA1xPG4iI2gFGZIjINI2Xtk1D24RCvwyFVEQE-ExLtgVJi0TEsAzDd1VBZdlEBA1XqwQJm0mAdpxFMoTWiwgNAsyYhMgIMgyOsgiULsiB"; // random seed string
    },

    update(dt) {
        // 공의 위치 업데이트
        this.node.position = this.node.position.add(this.direction.mul(this.speed * dt));

        // 화면 경계에 닿으면 방향 반전
        if (this.node.x > cc.winSize.width / 2 || this.node.x < -cc.winSize.width / 2) {
            this.direction.x *= -1;
        }
        if (this.node.y > cc.winSize.height / 2 || this.node.y < -cc.winSize.height / 2) {
            this.direction.y *= -1;
        }
    },
});
