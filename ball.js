cc.Class({
    extends: cc.Component,

    properties: {
        speed: 300, // 공의 속도
    },

    onLoad() {
        // 공의 초기 속도 설정
        this.direction = cc.v2(Math.random() > 0.5 ? 1 : -1, Math.random() > 0.5 ? 1 : -1).normalize();
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
