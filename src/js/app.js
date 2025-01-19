export default function healthCheck(data) {
    if (data.health < 15) {
        return 'critical';
    } else if (data.health > 50) {
        return 'healthy';
    } else {
        return 'wounded';
    }
}