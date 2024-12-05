export default function GoogleSso() {
    return (
        <a
            className="mb-4 flex justify-center border-[1px] rounded pl-[1px] h-[38px] bg-[#dc4e41] hover:bg-[#e45649]"
            style={{ borderColor: '#dc4e41' }}
            href="https://test.stytch.com/v1/public/oauth/google/start?public_token=public-token-test-f7676864-33db-45f6-a2af-ea3c3f284333">
            <div className="m-auto ml-0 flex justify-center items-center rounded-sm w-[34px] h-[34px] bg-white">
                <svg width="24" height="24">
                    <path
                        d="M20.64 12.205c0-.639-.057-1.252-.164-1.841H12v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
                        fill="#4285F4"></path>
                    <path
                        d="M12 21c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H3.957v2.332A8.997 8.997 0 0012 21z"
                        fill="#34A853"></path>
                    <path
                        d="M6.964 13.71A5.41 5.41 0 016.682 12c0-.593.102-1.17.282-1.71V7.958H3.957A8.996 8.996 0 003 12c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                        fill="#FBBC05"></path>
                    <path
                        d="M12 6.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C16.463 3.891 14.426 3 12 3a8.997 8.997 0 00-8.043 4.958l3.007 2.332C7.672 8.163 9.656 6.58 12 6.58z"
                        fill="#EA4335"></path>
                </svg>
            </div>
            <div className="flex flex-grow justify-center items-center">
                <svg width="133" height="38" viewBox="0 0 133 16">
                    <path
                        fill="#fff"
                        d="M10.686562 10.69266c0-.424059-.153229-.750933-.459692-.980631-.306463-.2297-.859223-.461603-1.658297-.69572-.799074-.234115-1.434691-.49473-1.906871-.781854-.903498-.55216-1.35524-1.272167-1.35524-2.160041 0-.777442.325753-1.417938.97727-1.921509.651518-.50357 1.497117-.755351 2.53682-.755351.69011 0 1.305297.123682 1.84558.37105.540282.247367.964784.59964 1.273517 1.05683.308733.457188.463097.964064.463097 1.520641h-1.716184c0-.50357-.16231-.897806-.486933-1.182721-.324624-.284915-.788851-.42737-1.392697-.42737-.562984 0-.99997.117056-1.310974.351172-.311003.234116-.466502.56099-.466502.980632 0 .353383.167984.648232.503959.884557.335974.236324.889869.46602 1.661702.689092.771832.223073 1.39156.477063 1.859199.761978.46764.284915.81042.611789 1.028348.980632.21793.368843.326893.800626.326893 1.295362 0 .803945-.316674 1.443338-.95003 1.918195-.633358.474858-1.492576.712284-2.577682.712284-.71735 0-1.376804-.129204-1.978379-.387615-.601575-.25841-1.069208-.615101-1.402912-1.070081C5.16685 11.397212 5 10.867145 5 10.261978h1.722994c0 .547743.186145.971796.558441 1.27217.372296.300376.90576.450561 1.60041.450561.599305 0 1.049913-.11816 1.351835-.354485.301923-.236324.452882-.548842.452882-.937563zm5.053209 2.48471h-1.654892V6.008155h1.654892v7.169215zm-1.757046-9.03109c0-.247369.080587-.45277.241764-.616209.161177-.16344.391588-.245158.691241-.245158s.531199.081719.694646.245158c.163447.16344.24517.36884.24517.616208 0 .24295-.081723.445039-.24517.60627-.163447.16123-.394993.241844-.694646.241844s-.530064-.080614-.69124-.241845c-.161178-.16123-.241765-.363318-.241765-.606269zm3.48685 5.393475c0-1.113155.269003-2.00212.807015-2.666921.538013-.664801 1.251948-.997197 2.141825-.997197.839936 0 1.500524.28491 1.981784.85474l.074913-.722222h1.491446v6.95056c0 .940882-.300783 1.682974-.902359 2.2263C22.462624 15.728341 21.651076 16 20.629533 16c-.540283 0-1.068072-.109326-1.583384-.327982-.515312-.218655-.906897-.50467-1.174769-.858053l.78318-.96738c.508501.587499 1.135038.881244 1.87963.881244.549363 0 .982945-.144664 1.300758-.433996.317814-.289332.476718-.71449.476718-1.275484v-.48369c-.47672.516822-1.112337.775229-1.906871.775229-.862637 0-1.56749-.3335-2.114584-1.00051-.547093-.66701-.820636-1.590208-.820636-2.769623zm1.648082.139144c0 .720017.150959 1.286525.452882 1.699541.301922.413016.720749.619521 1.256492.619521.667408 0 1.162281-.278284 1.484635-.834862V8.009174c-.313273-.543326-.803607-.814984-1.471015-.814984-.544823 0-.96819.209817-1.270112.62946-.301923.419641-.452882 1.038052-.452882 1.85525zm8.3017-3.670744l.047671.828236c.544823-.640506 1.259893-.960754 2.14523-.960754 1.534585 0 2.315487.854732 2.342728 2.56422v4.737513h-1.654892V8.53262c0-.45498-.101018-.791793-.303056-1.010449-.202039-.218655-.532333-.327981-.990892-.327981-.667408 0-1.164552.293745-1.491446.881243v5.101937h-1.654892V6.008155h1.559549zM39.31006 13.17737H37.65517V6.008155h1.654891v7.169215zm-1.757045-9.03109c0-.247369.080587-.45277.241764-.616209.161177-.16344.391588-.245158.69124-.245158.299653 0 .5312.081719.694647.245158.163446.16344.245169.36884.245169.616208 0 .24295-.081723.445039-.24517.60627-.163446.16123-.394993.241844-.694645.241844-.299653 0-.530064-.080614-.691241-.241845-.161177-.16123-.241764-.363318-.241764-.606269zm5.311998 1.861875l.047672.828236c.544823-.640506 1.259892-.960754 2.14523-.960754 1.534585 0 2.315486.854732 2.342727 2.56422v4.737513h-1.654891V8.53262c0-.45498-.101018-.791793-.303057-1.010449-.202038-.218655-.532332-.327981-.990892-.327981-.667408 0-1.164552.293745-1.491445.881243v5.101937h-1.654892V6.008155h1.559548zm16.6034 4.949541l1.171363-4.949541h1.61403l-2.009024 7.169215H58.88273l-1.57998-4.923038-1.552737 4.923038h-1.362051l-2.015835-7.169215h1.61403l1.191795 4.896534 1.511876-4.896534h1.246276l1.532308 4.949541zm5.870439 2.219674H63.68396V6.008155h1.654892v7.169215zm-1.757046-9.03109c0-.247369.080587-.45277.241764-.616209.161177-.16344.391588-.245158.69124-.245158.299654 0 .5312.081719.694647.245158.163447.16344.245169.36884.245169.616208 0 .24295-.081722.445039-.24517.60627-.163446.16123-.394992.241844-.694645.241844-.299653 0-.530064-.080614-.69124-.241845-.161178-.16123-.241765-.363318-.241765-.606269zm5.850008.119265v1.74261h1.300759v1.19266h-1.300759v4.00204c0 .27387.055617.471541.166852.593017.111234.121475.309865.182212.595897.182212.190688 0 .383643-.022087.578871-.06626v1.245668c-.376835.101598-.740045.152396-1.08964.152396-1.271254 0-1.906871-.68246-1.906871-2.0474V7.200814h-1.212226v-1.19266h1.212226v-1.74261h1.654891zM73.84486 6.79001c.540283-.609585 1.223572-.914373 2.049887-.914373 1.570906 0 2.367698.8724 2.390399 2.617227v4.684506h-1.654892V8.552497c0-.494735-.110098-.8448-.330297-1.050203-.2202-.205404-.543683-.308104-.970461-.308104-.662869 0-1.157742.287119-1.484636.861366v5.121814h-1.654892V3h1.654892v3.79001zm17.781574 5.135066c-.358676.45498-.85582.799524-1.491446 1.03364-.635627.234116-1.357507.351172-2.16566.351172-.830856 0-1.566356-.183315-2.206523-.54995-.640167-.366634-1.133906-.891178-1.48123-1.573648-.347325-.68247-.527795-1.478674-.541416-2.388635v-.755351c0-1.457704.35867-2.596241 1.07602-3.415648.71735-.819406 1.718448-1.229102 3.003323-1.229102 1.103266 0 1.97951.265033 2.628758.795107.649247.530074 1.039698 1.294252 1.171363 2.292558H89.93068c-.190688-1.161745-.883057-1.74261-2.077127-1.74261-.771833 0-1.358644.270555-1.76045.811672-.401808.541118-.609519 1.335112-.62314 2.382009v.7421c0 1.042478.225872 1.851933.677621 2.428389.45175.576455 1.079422.864679 1.883036.864679.880797 0 1.507334-.194358 1.87963-.583079V9.5h-2.043077V8.227829h3.75926v3.697247zm1.64127-2.398572c0-.702348.143015-1.335115.429047-1.898318.286032-.563204.687833-.996091 1.205415-1.298675.517582-.302584 1.112338-.453874 1.784287-.453874.994301 0 1.801309.311414 2.421045.93425.619736.622838.95457 1.448857 1.004512 2.478084l.006811.377676c0 .706766-.13961 1.338428-.418831 1.895005-.279222.556578-.678753.987257-1.198605 1.29205-.519852.304792-1.120283.457186-1.801312.457186-1.039704 0-1.871682-.336813-2.495958-1.010449-.624277-.673635-.93641-1.571435-.93641-2.693425v-.07951zm1.654893.139143c0 .737687.156634 1.315238.469907 1.732671.313273.417433.749125.626147 1.307569.626147.558444 0 .99316-.212027 1.304164-.636086.311003-.424059.466502-1.044678.466502-1.861875 0-.724435-.16004-1.298673-.480123-1.722732-.320083-.42406-.7548-.636086-1.304164-.636086-.540282 0-.969324.208714-1.287138.626147-.317813.417433-.476717 1.041365-.476717 1.871814zm6.503792-.139143c0-.702348.143014-1.335115.429046-1.898318.286032-.563204.687833-.996091 1.205415-1.298675.517582-.302584 1.112338-.453874 1.784287-.453874.994302 0 1.801309.311414 2.421045.93425.619736.622838.954571 1.448857 1.004513 2.478084l.00681.377676c0 .706766-.139609 1.338428-.418831 1.895005-.279221.556578-.678752.987257-1.198604 1.29205-.519852.304792-1.120284.457186-1.801313.457186-1.039704 0-1.871681-.336813-2.495958-1.010449-.624276-.673635-.93641-1.571435-.93641-2.693425v-.07951zm1.654892.139143c0 .737687.156634 1.315238.469908 1.732671.313273.417433.749125.626147 1.307568.626147.558444 0 .993161-.212027 1.304164-.636086.311003-.424059.466503-1.044678.466503-1.861875 0-.724435-.16004-1.298673-.480123-1.722732-.320084-.42406-.754801-.636086-1.304164-.636086-.540283 0-.969325.208714-1.287138.626147-.317814.417433-.476718 1.041365-.476718 1.871814zm6.524224-.125892c0-1.113155.269002-2.00212.807015-2.666921.538012-.664801 1.251947-.997197 2.141825-.997197.839935 0 1.500523.28491 1.981784.85474l.074912-.722222h1.491446v6.95056c0 .940882-.300783 1.682974-.902359 2.2263-.601575.543326-1.413122.814985-2.434666.814985-.540282 0-1.068072-.109326-1.583384-.327982-.515311-.218655-.906897-.50467-1.174768-.858053l.783179-.96738c.508501.587499 1.135038.881244 1.87963.881244.549363 0 .982945-.144664 1.300758-.433996.317814-.289332.476718-.71449.476718-1.275484v-.48369c-.47672.516822-1.112337.775229-1.906871.775229-.862636 0-1.567491-.3335-2.114584-1.00051-.547093-.66701-.820635-1.590208-.820635-2.769623zm1.648081.139144c0 .720017.150959 1.286525.452882 1.699541.301923.413016.720749.619521 1.256492.619521.667408 0 1.162282-.278284 1.484635-.834862V8.009174c-.313273-.543326-.803606-.814984-1.471015-.814984-.544823 0-.968189.209817-1.270112.62946-.301923.419641-.452882 1.038052-.452882 1.85525zm8.526438 3.498471h-1.654892V3h1.654892v10.17737zm5.264327.132518c-1.048785 0-1.898923-.321353-2.55044-.964067-.651518-.642715-.977272-1.498551-.977272-2.567534v-.198776c0-.7156.141879-1.354992.425641-1.918196.283762-.563204.682158-1.001612 1.1952-1.31524.513041-.313627 1.085097-.470438 1.716184-.470438 1.003382 0 1.778608.311414 2.325701.93425C127.726458 7.432726 128 8.31396 128 9.45362v.649337h-4.81485c.049942.591916.253113 1.060141.609518 1.40469.356405.344547.804742.516819 1.345025.516819.758212 0 1.375669-.298162 1.852389-.894496l.892144.828237c-.295113.428476-.688969.760872-1.181579.997197-.492611.236324-1.045371.354485-1.658297.354485zm-.197498-6.142202c-.454019 0-.820634.154603-1.099856.463812-.279222.30921-.457421.739889-.534605 1.29205h3.153148V8.80428c-.036322-.538908-.183876-.946397-.442667-1.222477-.25879-.27608-.61746-.414118-1.07602-.414118z"></path>
                </svg>
            </div>
        </a>
    );
}
