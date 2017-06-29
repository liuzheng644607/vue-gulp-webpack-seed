import axios from 'axios';
import ajax from 'Common/ajax';

const CancelToken = axios.CancelToken;

const methodMap = {
    $LIST: 'get',
    $CREATE: 'post',
    $UPDATE: 'patch',
    $DELETE: 'delete'
};

const methods = {};
let sourceId = 0;

for (var key in methodMap) {
    if (methodMap.hasOwnProperty(key)) {
        const method = methodMap[key];
        methods[key] = function(url, data, config) {
            const source = CancelToken.source();
            const cancelToken = source.token;
            const self = this;
            const id = sourceId++;
            if (!this._axiosTokenSource) {
                this._axiosTokenSource = {};
            }

            this._axiosTokenSource = {
                ...this._axiosTokenSource,
                [id]: source
            };

            if (['get', 'delete'].indexOf(method) > -1) {
                data = config;
            } else {
                config = {
                    data,
                    ...config
                };
            }

            return ajax({
                url,
                method,
                ...config,
                cancelToken
            }).then(function(res) {
                // 成功后删除token
                delete self._axiosTokenSource[id];
                return res;
            });
        };
    }
}

export default {
    // 取消ajax请求
    beforeDestroy() {
        if (this._axiosTokenSource) {
            for (var id in this._axiosTokenSource) {
                if (this._axiosTokenSource.hasOwnProperty(id)) {
                    const source = this._axiosTokenSource[id];
                    source.cancel();
                }
            }
        }
    },

    methods
};
