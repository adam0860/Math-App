import type { Lesson } from '../../types';

// <figures> (generated from scratch SVG files; every figure was rendered and checked)
const FIG = {
  pr_sieve: "<svg viewBox=\"0 0 520 248\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"23\" y=\"11\" width=\"46\" height=\"32\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" class=\"s-gray\" stroke-width=\"0.8\"/><text x=\"46.0\" y=\"32.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-gray\">1</text><rect x=\"71\" y=\"11\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.16\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"94.0\" y=\"32.0\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" class=\"t-red\">2</text><rect x=\"119\" y=\"11\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.16\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"142.0\" y=\"32.0\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" class=\"t-red\">3</text><rect x=\"167\" y=\"11\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"190.0\" y=\"32.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">4</text><line x1=\"178\" y1=\"35\" x2=\"202\" y2=\"19\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"215\" y=\"11\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.16\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"238.0\" y=\"32.0\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" class=\"t-red\">5</text><rect x=\"263\" y=\"11\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"286.0\" y=\"32.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">6</text><line x1=\"274\" y1=\"35\" x2=\"298\" y2=\"19\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"311\" y=\"11\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.16\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"334.0\" y=\"32.0\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" class=\"t-red\">7</text><rect x=\"359\" y=\"11\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"382.0\" y=\"32.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">8</text><line x1=\"370\" y1=\"35\" x2=\"394\" y2=\"19\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"407\" y=\"11\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"430.0\" y=\"32.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-green\">9</text><line x1=\"418\" y1=\"35\" x2=\"442\" y2=\"19\" stroke=\"currentColor\" class=\"s-green\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"455\" y=\"11\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"478.0\" y=\"32.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">10</text><line x1=\"466\" y1=\"35\" x2=\"490\" y2=\"19\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"23\" y=\"45\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.16\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"46.0\" y=\"66.0\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" class=\"t-red\">11</text><rect x=\"71\" y=\"45\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"94.0\" y=\"66.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">12</text><line x1=\"82\" y1=\"69\" x2=\"106\" y2=\"53\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"119\" y=\"45\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.16\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"142.0\" y=\"66.0\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" class=\"t-red\">13</text><rect x=\"167\" y=\"45\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"190.0\" y=\"66.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">14</text><line x1=\"178\" y1=\"69\" x2=\"202\" y2=\"53\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"215\" y=\"45\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"238.0\" y=\"66.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-green\">15</text><line x1=\"226\" y1=\"69\" x2=\"250\" y2=\"53\" stroke=\"currentColor\" class=\"s-green\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"263\" y=\"45\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"286.0\" y=\"66.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">16</text><line x1=\"274\" y1=\"69\" x2=\"298\" y2=\"53\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"311\" y=\"45\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.16\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"334.0\" y=\"66.0\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" class=\"t-red\">17</text><rect x=\"359\" y=\"45\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"382.0\" y=\"66.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">18</text><line x1=\"370\" y1=\"69\" x2=\"394\" y2=\"53\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"407\" y=\"45\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.16\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"430.0\" y=\"66.0\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" class=\"t-red\">19</text><rect x=\"455\" y=\"45\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"478.0\" y=\"66.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">20</text><line x1=\"466\" y1=\"69\" x2=\"490\" y2=\"53\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"23\" y=\"79\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"46.0\" y=\"100.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-green\">21</text><line x1=\"34\" y1=\"103\" x2=\"58\" y2=\"87\" stroke=\"currentColor\" class=\"s-green\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"71\" y=\"79\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"94.0\" y=\"100.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">22</text><line x1=\"82\" y1=\"103\" x2=\"106\" y2=\"87\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"119\" y=\"79\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.16\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"142.0\" y=\"100.0\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" class=\"t-red\">23</text><rect x=\"167\" y=\"79\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"190.0\" y=\"100.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">24</text><line x1=\"178\" y1=\"103\" x2=\"202\" y2=\"87\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"215\" y=\"79\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-orange\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"238.0\" y=\"100.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-orange\">25</text><line x1=\"226\" y1=\"103\" x2=\"250\" y2=\"87\" stroke=\"currentColor\" class=\"s-orange\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"263\" y=\"79\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"286.0\" y=\"100.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">26</text><line x1=\"274\" y1=\"103\" x2=\"298\" y2=\"87\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"311\" y=\"79\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"334.0\" y=\"100.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-green\">27</text><line x1=\"322\" y1=\"103\" x2=\"346\" y2=\"87\" stroke=\"currentColor\" class=\"s-green\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"359\" y=\"79\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"382.0\" y=\"100.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">28</text><line x1=\"370\" y1=\"103\" x2=\"394\" y2=\"87\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"407\" y=\"79\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.16\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"430.0\" y=\"100.0\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" class=\"t-red\">29</text><rect x=\"455\" y=\"79\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"478.0\" y=\"100.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">30</text><line x1=\"466\" y1=\"103\" x2=\"490\" y2=\"87\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"23\" y=\"113\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.16\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"46.0\" y=\"134.0\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" class=\"t-red\">31</text><rect x=\"71\" y=\"113\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"94.0\" y=\"134.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">32</text><line x1=\"82\" y1=\"137\" x2=\"106\" y2=\"121\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"119\" y=\"113\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"142.0\" y=\"134.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-green\">33</text><line x1=\"130\" y1=\"137\" x2=\"154\" y2=\"121\" stroke=\"currentColor\" class=\"s-green\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"167\" y=\"113\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"190.0\" y=\"134.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">34</text><line x1=\"178\" y1=\"137\" x2=\"202\" y2=\"121\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"215\" y=\"113\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-orange\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"238.0\" y=\"134.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-orange\">35</text><line x1=\"226\" y1=\"137\" x2=\"250\" y2=\"121\" stroke=\"currentColor\" class=\"s-orange\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"263\" y=\"113\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"286.0\" y=\"134.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">36</text><line x1=\"274\" y1=\"137\" x2=\"298\" y2=\"121\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"311\" y=\"113\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.16\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"334.0\" y=\"134.0\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" class=\"t-red\">37</text><rect x=\"359\" y=\"113\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"382.0\" y=\"134.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">38</text><line x1=\"370\" y1=\"137\" x2=\"394\" y2=\"121\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"407\" y=\"113\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"430.0\" y=\"134.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-green\">39</text><line x1=\"418\" y1=\"137\" x2=\"442\" y2=\"121\" stroke=\"currentColor\" class=\"s-green\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"455\" y=\"113\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"478.0\" y=\"134.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">40</text><line x1=\"466\" y1=\"137\" x2=\"490\" y2=\"121\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"23\" y=\"147\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.16\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"46.0\" y=\"168.0\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" class=\"t-red\">41</text><rect x=\"71\" y=\"147\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"94.0\" y=\"168.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">42</text><line x1=\"82\" y1=\"171\" x2=\"106\" y2=\"155\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"119\" y=\"147\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.16\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"142.0\" y=\"168.0\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" class=\"t-red\">43</text><rect x=\"167\" y=\"147\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"190.0\" y=\"168.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">44</text><line x1=\"178\" y1=\"171\" x2=\"202\" y2=\"155\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"215\" y=\"147\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"238.0\" y=\"168.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-green\">45</text><line x1=\"226\" y1=\"171\" x2=\"250\" y2=\"155\" stroke=\"currentColor\" class=\"s-green\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"263\" y=\"147\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"286.0\" y=\"168.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">46</text><line x1=\"274\" y1=\"171\" x2=\"298\" y2=\"155\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"311\" y=\"147\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.16\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"334.0\" y=\"168.0\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" class=\"t-red\">47</text><rect x=\"359\" y=\"147\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"382.0\" y=\"168.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">48</text><line x1=\"370\" y1=\"171\" x2=\"394\" y2=\"155\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"407\" y=\"147\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-purple\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"430.0\" y=\"168.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-purple\">49</text><line x1=\"418\" y1=\"171\" x2=\"442\" y2=\"155\" stroke=\"currentColor\" class=\"s-purple\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"455\" y=\"147\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"478.0\" y=\"168.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">50</text><line x1=\"466\" y1=\"171\" x2=\"490\" y2=\"155\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"23\" y=\"181\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"46.0\" y=\"202.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-green\">51</text><line x1=\"34\" y1=\"205\" x2=\"58\" y2=\"189\" stroke=\"currentColor\" class=\"s-green\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"71\" y=\"181\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"94.0\" y=\"202.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">52</text><line x1=\"82\" y1=\"205\" x2=\"106\" y2=\"189\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"119\" y=\"181\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.16\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"142.0\" y=\"202.0\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" class=\"t-red\">53</text><rect x=\"167\" y=\"181\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"190.0\" y=\"202.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">54</text><line x1=\"178\" y1=\"205\" x2=\"202\" y2=\"189\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"215\" y=\"181\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-orange\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"238.0\" y=\"202.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-orange\">55</text><line x1=\"226\" y1=\"205\" x2=\"250\" y2=\"189\" stroke=\"currentColor\" class=\"s-orange\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"263\" y=\"181\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"286.0\" y=\"202.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">56</text><line x1=\"274\" y1=\"205\" x2=\"298\" y2=\"189\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"311\" y=\"181\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"334.0\" y=\"202.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-green\">57</text><line x1=\"322\" y1=\"205\" x2=\"346\" y2=\"189\" stroke=\"currentColor\" class=\"s-green\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"359\" y=\"181\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"382.0\" y=\"202.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">58</text><line x1=\"370\" y1=\"205\" x2=\"394\" y2=\"189\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"407\" y=\"181\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.16\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"430.0\" y=\"202.0\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" class=\"t-red\">59</text><rect x=\"455\" y=\"181\" width=\"46\" height=\"32\" rx=\"4\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.12\" stroke=\"none\"/><text x=\"478.0\" y=\"202.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">60</text><line x1=\"466\" y1=\"205\" x2=\"490\" y2=\"189\" stroke=\"currentColor\" class=\"s-blue\" stroke-width=\"1.2\" stroke-opacity=\"0.7\"/><rect x=\"30\" y=\"225\" width=\"14\" height=\"14\" rx=\"3\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.5\"/><text x=\"50\" y=\"237\" font-size=\"12\">prime</text><rect x=\"107\" y=\"225\" width=\"14\" height=\"14\" rx=\"3\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.5\"/><text x=\"127\" y=\"237\" font-size=\"12\">crossed by 2</text><rect x=\"233\" y=\"225\" width=\"14\" height=\"14\" rx=\"3\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.5\"/><text x=\"253\" y=\"237\" font-size=\"12\">by 3</text><rect x=\"303\" y=\"225\" width=\"14\" height=\"14\" rx=\"3\" fill=\"currentColor\" class=\"f-orange\" fill-opacity=\"0.5\"/><text x=\"323\" y=\"237\" font-size=\"12\">by 5</text><rect x=\"373\" y=\"225\" width=\"14\" height=\"14\" rx=\"3\" fill=\"currentColor\" class=\"f-purple\" fill-opacity=\"0.5\"/><text x=\"393\" y=\"237\" font-size=\"12\">by 7</text></svg>",
  pr_tiling: "<svg viewBox=\"0 0 520 264.03999999999996\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"20\" width=\"449.8\" height=\"194.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><rect x=\"30.0\" y=\"20\" width=\"194.0\" height=\"194.0\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.15\" stroke=\"currentColor\" stroke-width=\"1.2\"/><rect x=\"224.0\" y=\"20\" width=\"194.0\" height=\"194.0\" fill=\"currentColor\" class=\"f-blue\" fill-opacity=\"0.15\" stroke=\"currentColor\" stroke-width=\"1.2\"/><rect x=\"418.1\" y=\"20.0\" width=\"61.7\" height=\"61.7\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.18\" stroke=\"currentColor\" stroke-width=\"1.2\"/><rect x=\"418.1\" y=\"81.7\" width=\"61.7\" height=\"61.7\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.18\" stroke=\"currentColor\" stroke-width=\"1.2\"/><rect x=\"418.1\" y=\"143.5\" width=\"61.7\" height=\"61.7\" fill=\"currentColor\" class=\"f-green\" fill-opacity=\"0.18\" stroke=\"currentColor\" stroke-width=\"1.2\"/><rect x=\"418.1\" y=\"205.2\" width=\"8.8\" height=\"8.8\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.5\" stroke=\"currentColor\" stroke-width=\"0.6\"/><rect x=\"426.9\" y=\"205.2\" width=\"8.8\" height=\"8.8\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.5\" stroke=\"currentColor\" stroke-width=\"0.6\"/><rect x=\"435.7\" y=\"205.2\" width=\"8.8\" height=\"8.8\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.5\" stroke=\"currentColor\" stroke-width=\"0.6\"/><rect x=\"444.5\" y=\"205.2\" width=\"8.8\" height=\"8.8\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.5\" stroke=\"currentColor\" stroke-width=\"0.6\"/><rect x=\"453.4\" y=\"205.2\" width=\"8.8\" height=\"8.8\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.5\" stroke=\"currentColor\" stroke-width=\"0.6\"/><rect x=\"462.2\" y=\"205.2\" width=\"8.8\" height=\"8.8\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.5\" stroke=\"currentColor\" stroke-width=\"0.6\"/><rect x=\"471.0\" y=\"205.2\" width=\"8.8\" height=\"8.8\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.5\" stroke=\"currentColor\" stroke-width=\"0.6\"/><text x=\"127.0\" y=\"122.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">462 × 462</text><text x=\"321.1\" y=\"122.0\" text-anchor=\"middle\" font-size=\"14\" class=\"t-blue\">462 × 462</text><text x=\"448.9\" y=\"55.9\" text-anchor=\"middle\" font-size=\"12\" class=\"t-green\">147²</text><text x=\"254.9\" y=\"236.0\" text-anchor=\"middle\" font-size=\"13\">1071 = 2·462 + 147,  462 = 3·147 + 21,  147 = 7·21</text><text x=\"479.8\" y=\"254.0\" text-anchor=\"end\" font-size=\"12\" class=\"t-red\">the last squares (bottom right, red) are 21 × 21: gcd = 21</text></svg>",
  pr_tree: "<svg viewBox=\"0 0 520 262\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"260\" y1=\"34\" x2=\"150\" y2=\"70\" stroke=\"currentColor\" stroke-width=\"1.3\" class=\"s-gray\"/><line x1=\"260\" y1=\"34\" x2=\"370\" y2=\"70\" stroke=\"currentColor\" stroke-width=\"1.3\" class=\"s-gray\"/><line x1=\"150\" y1=\"94\" x2=\"95\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"1.3\" class=\"s-gray\"/><line x1=\"150\" y1=\"94\" x2=\"205\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"1.3\" class=\"s-gray\"/><line x1=\"205\" y1=\"154\" x2=\"165\" y2=\"190\" stroke=\"currentColor\" stroke-width=\"1.3\" class=\"s-gray\"/><line x1=\"205\" y1=\"154\" x2=\"245\" y2=\"190\" stroke=\"currentColor\" stroke-width=\"1.3\" class=\"s-gray\"/><line x1=\"370\" y1=\"94\" x2=\"320\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"1.3\" class=\"s-gray\"/><line x1=\"370\" y1=\"94\" x2=\"420\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"1.3\" class=\"s-gray\"/><line x1=\"420\" y1=\"154\" x2=\"385\" y2=\"190\" stroke=\"currentColor\" stroke-width=\"1.3\" class=\"s-gray\"/><line x1=\"420\" y1=\"154\" x2=\"455\" y2=\"190\" stroke=\"currentColor\" stroke-width=\"1.3\" class=\"s-gray\"/><text x=\"260\" y=\"29\" text-anchor=\"middle\" font-size=\"16\">360</text><text x=\"150\" y=\"89\" text-anchor=\"middle\" font-size=\"16\">8</text><text x=\"370\" y=\"89\" text-anchor=\"middle\" font-size=\"16\">45</text><circle cx=\"95\" cy=\"144\" r=\"15\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.15\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"95\" y=\"149\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">2</text><text x=\"205\" y=\"149\" text-anchor=\"middle\" font-size=\"16\">4</text><circle cx=\"165\" cy=\"204\" r=\"15\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.15\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"165\" y=\"209\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">2</text><circle cx=\"245\" cy=\"204\" r=\"15\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.15\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"245\" y=\"209\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">2</text><circle cx=\"320\" cy=\"144\" r=\"15\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.15\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"320\" y=\"149\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">5</text><text x=\"420\" y=\"149\" text-anchor=\"middle\" font-size=\"16\">9</text><circle cx=\"385\" cy=\"204\" r=\"15\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.15\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"385\" y=\"209\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">3</text><circle cx=\"455\" cy=\"204\" r=\"15\" fill=\"currentColor\" class=\"f-red\" fill-opacity=\"0.15\" stroke=\"currentColor\" stroke-width=\"1.4\"/><text x=\"455\" y=\"209\" text-anchor=\"middle\" font-size=\"15\" class=\"t-red\">3</text><text x=\"260\" y=\"250\" text-anchor=\"middle\" font-size=\"16\">360 = 2³ · 3² · 5</text></svg>",
};
// </figures>

const primeCounts = [4, 8, 10, 12, 15, 17, 19, 22, 24, 25, 29, 30, 31, 34, 35, 37, 39, 41, 42, 46];

export const lesson: Lesson = {
  id: 'dm-primes-gcd',
  title: 'Primes, GCD and the Euclidean Algorithm',
  summary: 'The atoms of arithmetic, how to find them with a sieve, and the 2300-year-old algorithm for greatest common divisors that still runs inside every RSA library.',
  minutes: 20,
  objectives: [
    'Decide whether a number is prime by trial division up to $\\sqrt{n}$, and factor it into primes',
    'State the fundamental theorem of arithmetic and use factorizations to count divisors and compute gcd and lcm',
    'Implement the sieve of Eratosthenes and explain why it starts crossing out at $p^2$',
    'Run the Euclidean algorithm by hand and in code, and explain why it takes only $O(\\log n)$ steps',
    'Find Bézout coefficients with the extended Euclidean algorithm and use them to prove Euclid\'s lemma',
  ],
  steps: [
    {
      kind: 'concept',
      title: 'Primes: the atoms of multiplication',
      blocks: [
        {
          type: 'definition',
          term: 'Prime and composite',
          text: 'An integer $p > 1$ is [[dm-prime]] if its only positive divisors are $1$ and $p$. An integer $n > 1$ that is not prime is **composite**: $n = ab$ with $1 < a, b < n$. The number $1$ is neither — by convention, so that factorizations are unique.',
        },
        {
          type: 'p',
          text: 'The primes start $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, \\dots$ Every even number except $2$ is composite, so $2$ is the only even prime. To test whether $n$ is prime, you do not need to try every number below $n$:',
        },
        {
          type: 'theorem',
          name: 'Trial division up to $\\sqrt{n}$',
          text: 'If $n > 1$ is composite, then $n$ has a prime divisor $p \\le \\sqrt{n}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why $\\sqrt{n}$ is enough',
          text: 'If $n = ab$ with $1 < a \\le b$, then $a \\cdot a \\le a \\cdot b = n$, so $a \\le \\sqrt{n}$. Factors come in pairs, one on each side of $\\sqrt{n}$; if none is found on the small side, there is none on the big side either. Any prime factor of $a$ is also $\\le \\sqrt{n}$ and also divides $n$.',
        },
        {
          type: 'derivation',
          title: 'Is $221$ prime?',
          steps: [
            { tex: '\\sqrt{221} \\approx 14.87', why: 'Only primes up to $14$ need testing: $2, 3, 5, 7, 11, 13$.' },
            { tex: '2, 3, 5, 7, 11 \\nmid 221', why: '$221$ is odd; its digit sum $5$ is not a multiple of $3$; it does not end in $0$ or $5$; $221 = 7 \\cdot 31 + 4$ and $221 = 11 \\cdot 20 + 1$.' },
            { tex: '221 = 13 \\cdot 17', why: '$13$ divides it, so $221$ is composite. Note the partner $17$ is above $\\sqrt{221}$, as the argument predicts.' },
          ],
          result: 'Trial division costs about $\\sqrt{n}$ divisions: instant for $n = 221$, hopeless for a 600-digit RSA modulus.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'Find the smallest prime factor of $391$.',
      hint: '$\\sqrt{391} \\approx 19.8$, so test the primes up to $19$.',
      answer: '17',
      explanation: '$391$ is odd, its digit sum $13$ is not divisible by $3$, it does not end in $0$ or $5$, and $7, 11, 13$ leave remainders ($391 = 7 \\cdot 55 + 6 = 11 \\cdot 35 + 6 = 13 \\cdot 30 + 1$). Then $391 = 17 \\cdot 23$. Since $17 < \\sqrt{391} < 23$, it was found just below the square root.',
    },
    {
      kind: 'concept',
      title: 'The fundamental theorem of arithmetic',
      blocks: [
        {
          type: 'theorem',
          name: 'Fundamental theorem of arithmetic',
          text: 'Every integer $n > 1$ can be written as a product of primes, $n = p_1^{e_1} p_2^{e_2} \\cdots p_k^{e_k}$, and this factorization is **unique** apart from the order of the factors.',
        },
        {
          type: 'figure',
          svg: FIG.pr_tree,
          alt: 'A factor tree: 360 splits into 8 and 45; 8 into 2 and 4; 4 into 2 and 2; 45 into 5 and 9; 9 into 3 and 3. The prime leaves are circled, giving 360 = 2³ · 3² · 5.',
          caption: 'Any factor tree for $360$ — start with $8 \\cdot 45$, $10 \\cdot 36$ or $2 \\cdot 180$ — ends with the same multiset of prime leaves. That is what "unique" promises.',
        },
        {
          type: 'p',
          text: '**Existence** is a [[dm-strong-induction]] argument (from the Proofs unit): if $n$ is prime, done; otherwise $n = ab$ with smaller $a, b$, which factor by the induction hypothesis. **Uniqueness** is subtler and needs Euclid\'s lemma ("if a prime divides $ab$, it divides $a$ or $b$"), which we prove at the end of this lesson using the Euclidean algorithm.',
        },
        {
          type: 'derivation',
          title: 'Count the positive divisors of $360 = 2^3 \\cdot 3^2 \\cdot 5$',
          steps: [
            { tex: 'd \\mid 360 \\iff d = 2^a 3^b 5^c,\\; 0 \\le a \\le 3,\\; 0 \\le b \\le 2,\\; 0 \\le c \\le 1', why: 'By uniqueness of factorization, a divisor can only use the primes of $360$, each at most as often as $360$ does.' },
            { tex: '(3 + 1)(2 + 1)(1 + 1)', why: 'Choose each exponent independently: $4$ choices for $a$, $3$ for $b$, $2$ for $c$ (product rule).' },
            { tex: '= 24', why: 'So $360$ has $24$ positive divisors — part of why $360$ degrees in a circle is so convenient to divide up.' },
          ],
          result: 'In general $n = \\prod p_i^{e_i}$ has $\\prod (e_i + 1)$ positive divisors.',
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'Uniqueness is not automatic. In the even numbers $\\{2, 4, 6, \\dots\\}$, call a number "even-prime" if it is not a product of two smaller even numbers: $2, 6, 10, 18, \\dots$ Then $36 = 2 \\cdot 18 = 6 \\cdot 6$ has two different factorizations. Euclid\'s lemma is exactly what fails there.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'How many positive divisors does $720 = 2^4 \\cdot 3^2 \\cdot 5$ have?',
      hint: 'Add one to each exponent and multiply.',
      answer: '30',
      explanation: 'A divisor is $2^a 3^b 5^c$ with $a \\in \\{0, \\dots, 4\\}$ (5 choices), $b \\in \\{0, 1, 2\\}$ (3 choices), $c \\in \\{0, 1\\}$ (2 choices): $5 \\cdot 3 \\cdot 2 = 30$. Forgetting the exponent $0$ (that is, using $4 \\cdot 2 \\cdot 1 = 8$) is the classic slip — $0$ is how a divisor *leaves out* a prime.',
    },
    {
      kind: 'concept',
      title: 'The sieve of Eratosthenes',
      blocks: [
        {
          type: 'p',
          text: 'To find **all** primes up to $n$, testing each number separately is wasteful. The [[dm-sieve-of-eratosthenes]] (about 240 BCE) works the other way round: instead of asking "what divides $k$?", it marks the multiples of each prime as composite.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Start', text: 'Write $2, 3, \\dots, n$. All are unmarked.' },
            { title: 'Next prime', text: 'The smallest unmarked number $p$ is prime — nothing smaller divides it, or it would have been marked.' },
            { title: 'Cross out', text: 'Mark $p^2, p^2 + p, p^2 + 2p, \\dots$ as composite.' },
            { title: 'Stop at $\\sqrt{n}$', text: 'Once $p^2 > n$, every unmarked number left is prime.' },
          ],
        },
        {
          type: 'figure',
          svg: FIG.pr_sieve,
          alt: 'A 10 by 6 grid of the numbers 1 to 60. Primes are outlined in red; composite numbers are struck through and tinted by their smallest prime factor: blue for 2, green for 3, orange for 5, and purple for 49, crossed by 7.',
          caption: 'The sieve up to $60$. Each composite is coloured by the prime that crosses it out first. Only $2, 3, 5, 7$ are needed because $\\sqrt{60} < 8$; $49 = 7^2$ is the only number left for $7$ to cross.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why start crossing at $p^2$',
          text: 'Any composite $m = pk$ with $k < p$ has a prime factor smaller than $p$ (a prime factor of $k$), so it was already crossed out by that smaller prime. The first multiple of $p$ that is still unmarked is $p \\cdot p$. The same fact explains stopping at $\\sqrt{n}$: if $p^2 > n$, there is nothing left for $p$ to cross.',
        },
        {
          type: 'code',
          title: 'sieve.cpp',
          runnable: true,
          code: `#include <cstdio>
#include <vector>

// Sieve of Eratosthenes: isPrime[k] for 0 <= k <= n.
std::vector<bool> sieve(int n) {
    std::vector<bool> isPrime(n + 1, true);
    isPrime[0] = isPrime[1] = false;
    for (long long p = 2; p * p <= n; ++p)
        if (isPrime[p])
            for (long long m = p * p; m <= n; m += p)   // smaller multiples already crossed
                isPrime[m] = false;
    return isPrime;
}

int main() {
    auto small = sieve(60);
    for (int k = 2; k <= 60; ++k)
        if (small[k]) std::printf("%d ", k);
    std::printf("\\n");

    auto big = sieve(1000000);
    int count = 0;
    for (bool b : big) count += b;
    std::printf("primes below one million: %d\\n", count);
}`,
          output: `2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59
primes below one million: 78498`,
          annotations: [
            { lines: 8, text: 'Outer loop only to $\\sqrt{n}$. Using `long long` keeps `p * p` from overflowing for large $n$.' },
            { lines: 10, text: 'Start at $p^2$ and step by $p$. Total work is about $n \\log \\log n$ — essentially linear.' },
            { lines: 6, text: '`std::vector<bool>` packs one bit per entry: a million flags in about 125 KB.' },
          ],
        },
      ],
    },
    {
      kind: 'concept',
      title: 'Infinitely many primes — and how thinly they spread',
      blocks: [
        {
          type: 'p',
          text: 'In the Proofs unit you saw Euclid\'s [[dm-proof-by-contradiction]] that the primes never run out: if $p_1, \\dots, p_n$ were all of them, then $N = p_1 p_2 \\cdots p_n + 1$ leaves remainder $1$ when divided by every $p_i$, yet $N > 1$ must have some prime factor — a prime missing from the list.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The proof does not say $N$ is prime',
          text: '$2 \\cdot 3 \\cdot 5 \\cdot 7 \\cdot 11 \\cdot 13 + 1 = 30031 = 59 \\cdot 509$. The proof only shows $N$ has a prime factor **not on the list**. It works because the list was assumed to be complete; for an actual finite list, $N$ may be composite.',
        },
        {
          type: 'p',
          text: 'How common are primes? Let $\\pi(x)$ count the primes $\\le x$. The **prime number theorem** (1896) says $\\pi(x) \\approx \\frac{x}{\\ln x}$: near $x$, roughly one number in $\\ln x$ is prime. For 1024-bit numbers, $\\ln(2^{1024}) \\approx 710$, so about one random odd 1024-bit number in $355$ is prime — which is why RSA key generation can simply try random numbers until one passes a primality test.',
        },
        {
          type: 'graph',
          x: [0, 200],
          y: [0, 50],
          yStep: 10,
          functions: [{ expr: 'x / ln(x)', label: '$\\frac{x}{\\ln x}$', color: 'blue', domain: [2, 200] }],
          points: primeCounts.map((c, i) => ({ x: 10 * (i + 1), y: c, color: 'red' as const })),
          caption: 'Red dots: the true counts $\\pi(10), \\pi(20), \\dots, \\pi(200)$ (for example $\\pi(100) = 25$). The blue curve $x/\\ln x$ follows them, slightly low; the *ratio* tends to $1$ as $x \\to \\infty$.',
        },
      ],
    },
    {
      kind: 'truefalse',
      prompt: 'True or false: if $p_1, p_2, \\dots, p_k$ are the first $k$ primes, then $p_1 p_2 \\cdots p_k + 1$ is always prime.',
      answer: false,
      explanation: 'For $k = 1, \\dots, 5$ it happens to be prime ($3, 7, 31, 211, 2311$), but for $k = 6$: $2 \\cdot 3 \\cdot 5 \\cdot 7 \\cdot 11 \\cdot 13 + 1 = 30031 = 59 \\cdot 509$. Euclid\'s argument only guarantees a prime factor larger than $p_k$ — here $59$ — not that the number itself is prime. A few true cases never prove a "for all" statement.',
    },
    {
      kind: 'concept',
      title: 'Greatest common divisor and least common multiple',
      blocks: [
        {
          type: 'definition',
          term: 'gcd and lcm',
          text: 'For integers $a, b$ not both zero, $\\gcd(a, b)$ is the largest integer dividing both — the [[dm-gcd]]. The **least common multiple** $\\operatorname{lcm}(a, b)$ of positive $a, b$ is the smallest positive integer that both divide. $a$ and $b$ are **coprime** (relatively prime) if $\\gcd(a, b) = 1$.',
        },
        {
          type: 'p',
          text: 'With factorizations in hand, both are easy: take each prime to the **smaller** exponent for the gcd and the **larger** exponent for the lcm.',
        },
        {
          type: 'derivation',
          title: '$\\gcd$ and $\\operatorname{lcm}$ of $360$ and $84$',
          steps: [
            { tex: '360 = 2^3 \\cdot 3^2 \\cdot 5^1 \\cdot 7^0, \\quad 84 = 2^2 \\cdot 3^1 \\cdot 5^0 \\cdot 7^1', why: 'Factor both, writing missing primes with exponent $0$ so they line up.' },
            { tex: '\\gcd = 2^{\\min(3,2)} 3^{\\min(2,1)} 5^{\\min(1,0)} 7^{\\min(0,1)} = 2^2 \\cdot 3 = 12', why: 'A common divisor may use each prime at most as often as **both** numbers do.' },
            { tex: '\\operatorname{lcm} = 2^3 \\cdot 3^2 \\cdot 5 \\cdot 7 = 2520', why: 'A common multiple must contain each prime at least as often as **either** number does.' },
            { tex: '\\gcd \\cdot \\operatorname{lcm} = 12 \\cdot 2520 = 30240 = 360 \\cdot 84', why: '$\\min(x, y) + \\max(x, y) = x + y$ for each exponent, so $\\gcd(a, b) \\cdot \\operatorname{lcm}(a, b) = ab$ always.' },
          ],
          result: '$\\gcd(360, 84) = 12$ and $\\operatorname{lcm}(360, 84) = 2520$.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'lcm in game timing',
          text: 'Two looping animations of $12$ and $18$ frames realign every $\\operatorname{lcm}(12, 18) = 36$ frames; spawners that fire every $a$ and $b$ seconds fire together every $\\operatorname{lcm}(a, b)$ seconds. C++17 provides `std::gcd` and `std::lcm` in `<numeric>`. Compute the lcm as `a / gcd(a, b) * b` — dividing first avoids overflow.',
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'Factoring is **slow** for big numbers — that is what makes RSA secure. So the factorization method is only practical for small numbers. For large ones we need a way to compute gcds without factoring. Euclid found it.',
        },
      ],
    },
    {
      kind: 'numeric',
      prompt: 'One enemy spawner fires every $12$ seconds and another every $18$ seconds. They both fire at $t = 0$. After how many seconds do they next fire at the same moment?',
      hint: 'You need the smallest positive number that is a multiple of both $12$ and $18$.',
      unit: 's',
      answer: '36',
      explanation: '$12 = 2^2 \\cdot 3$ and $18 = 2 \\cdot 3^2$, so $\\operatorname{lcm}(12, 18) = 2^2 \\cdot 3^2 = 36$. Check with $\\gcd(12, 18) = 6$: $\\frac{12 \\cdot 18}{6} = 36$. The product $12 \\cdot 18 = 216$ is *a* common multiple, but not the least.',
    },
    {
      kind: 'concept',
      title: 'The Euclidean algorithm',
      blocks: [
        {
          type: 'p',
          text: 'The [[dm-euclidean-algorithm]] (Euclid\'s *Elements*, around 300 BCE) is one of the oldest algorithms still in daily use. It rests on a single lemma.',
        },
        {
          type: 'theorem',
          name: 'Key lemma',
          tex: '\\gcd(a, b) = \\gcd(b,\\, a \\bmod b) \\quad (b > 0), \\qquad \\gcd(a, 0) = a \\quad (a > 0)',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why the lemma holds',
          text: 'Write $a = bq + r$ with $r = a \\bmod b$. If $d$ divides $a$ and $b$, it divides $r = a - qb$ (a combination of $a$ and $b$). Conversely, if $d$ divides $b$ and $r$, it divides $a = bq + r$. So the pairs $(a, b)$ and $(b, r)$ have **exactly the same common divisors**, hence the same greatest one. And $\\gcd(a, 0) = a$ because every number divides $0$.',
        },
        {
          type: 'table',
          headers: ['Step', '$a$', '$b$', 'division', '$a \\bmod b$'],
          rows: [
            ['1', '$1071$', '$462$', '$1071 = 2 \\cdot 462 + 147$', '$147$'],
            ['2', '$462$', '$147$', '$462 = 3 \\cdot 147 + 21$', '$21$'],
            ['3', '$147$', '$21$', '$147 = 7 \\cdot 21 + 0$', '$0$'],
            ['4', '$21$', '$0$', 'stop', '—'],
          ],
          caption: '$\\gcd(1071, 462) = \\gcd(462, 147) = \\gcd(147, 21) = \\gcd(21, 0) = 21$. The last nonzero remainder is the gcd.',
        },
        {
          type: 'figure',
          svg: FIG.pr_tiling,
          alt: 'A 1071 by 462 rectangle tiled greedily by squares: two 462-squares, then three 147-squares in the remaining strip, then seven tiny 21-squares that fill the last 147 by 21 strip exactly.',
          caption: 'Euclid as geometry: cut the largest possible squares off a $1071 \\times 462$ rectangle, then repeat on the leftover strip. The square that finally tiles a strip exactly has side $\\gcd = 21$.',
        },
        {
          type: 'code',
          title: 'euclid.cpp',
          runnable: true,
          code: `#include <cstdio>

// gcd(a, b) = gcd(b, a mod b); gcd(a, 0) = a.
long long gcd(long long a, long long b) {
    while (b != 0) {
        long long r = a % b;
        a = b;
        b = r;
    }
    return a;
}

// Extended Euclid: returns g = gcd(a, b) and sets s, t with s*a + t*b = g.
long long extgcd(long long a, long long b, long long& s, long long& t) {
    long long s0 = 1, t0 = 0;   // a = 1*a + 0*b
    long long s1 = 0, t1 = 1;   // b = 0*a + 1*b
    while (b != 0) {
        long long q = a / b, r = a % b;
        a = b; b = r;
        long long s2 = s0 - q * s1, t2 = t0 - q * t1;   // r = (s0 - q s1) a + (t0 - q t1) b
        s0 = s1; t0 = t1;
        s1 = s2; t1 = t2;
    }
    s = s0; t = t0;
    return a;
}

int main() {
    std::printf("gcd(1071, 462) = %lld\\n", gcd(1071, 462));
    long long s, t;
    long long g = extgcd(240, 46, s, t);
    std::printf("gcd(240, 46) = %lld = (%lld)*240 + (%lld)*46\\n", g, s, t);
    g = extgcd(99, 78, s, t);
    std::printf("gcd(99, 78) = %lld = (%lld)*99 + (%lld)*78\\n", g, s, t);
}`,
          output: `gcd(1071, 462) = 21
gcd(240, 46) = 2 = (-9)*240 + (47)*46
gcd(99, 78) = 3 = (-11)*99 + (14)*78`,
          annotations: [
            { lines: '4-11', text: 'Three lines of logic: replace $(a, b)$ by $(b, a \\bmod b)$ until $b = 0$. (For non-negative inputs C++\'s `%` is the true remainder.)' },
            { lines: '14-26', text: 'The extended version, explained two cards from now: it tracks how each remainder is built from the original $a$ and $b$.' },
          ],
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why it is fast',
          text: 'After two steps the first number at least halves: if $b \\le a/2$ then $a \\bmod b < b \\le a/2$; if $b > a/2$ then $a \\bmod b = a - b < a/2$. So the number of steps is at most about $2 \\log_2 a$ — around $2000$ steps for 1024-bit numbers, versus the astronomically many divisions factoring would need. Lamé showed in 1844 that the worst inputs are consecutive Fibonacci numbers.',
        },
      ],
    },
    {
      kind: 'order',
      prompt: 'Put the steps of the Euclidean algorithm for $\\gcd(252, 105)$ in order.',
      lines: [
        '$252 = 2 \\cdot 105 + 42$',
        '$105 = 2 \\cdot 42 + 21$',
        '$42 = 2 \\cdot 21 + 0$',
        'The last nonzero remainder is $21$, so $\\gcd(252, 105) = 21$.',
      ],
      distractors: ['$105 = 2 \\cdot 252 - 399$'],
      explanation: 'Each step divides the previous divisor by the previous remainder: $(252, 105) \\to (105, 42) \\to (42, 21) \\to (21, 0)$. Check by factoring: $252 = 2^2 \\cdot 3^2 \\cdot 7$ and $105 = 3 \\cdot 5 \\cdot 7$ share $3 \\cdot 7 = 21$. The distractor is not a division-algorithm step (the remainder must satisfy $0 \\le r < 105$).',
    },
    {
      kind: 'numeric',
      prompt: 'Use the Euclidean algorithm to compute $\\gcd(1001, 385)$.',
      hint: 'Start with $1001 = 2 \\cdot 385 + 231$.',
      label: '$\\gcd =$',
      answer: '77',
      explanation: '$1001 = 2 \\cdot 385 + 231$, $385 = 1 \\cdot 231 + 154$, $231 = 1 \\cdot 154 + 77$, $154 = 2 \\cdot 77 + 0$. The last nonzero remainder is $77$. Check: $1001 = 7 \\cdot 11 \\cdot 13$ and $385 = 5 \\cdot 7 \\cdot 11$, sharing $7 \\cdot 11 = 77$.',
    },
    {
      kind: 'concept',
      title: "Bézout's identity and the extended algorithm",
      blocks: [
        {
          type: 'theorem',
          name: "Bézout's identity",
          tex: '\\gcd(a, b) = sa + tb \\quad \\text{for some integers } s, t',
          text: 'The gcd of $a$ and $b$ is an integer **linear combination** of them. In fact it is the smallest positive integer of the form $sa + tb$.',
        },
        {
          type: 'p',
          text: 'The [[dm-bezout-identity|Bézout coefficients]] $s, t$ fall out of the Euclidean algorithm. Every remainder is a combination of the previous two, so by working backwards (or tracking coefficients forwards, as the code does) we can express the gcd in terms of the original $a$ and $b$.',
        },
        {
          type: 'derivation',
          title: 'Write $\\gcd(240, 46)$ as $240s + 46t$ by back-substitution',
          steps: [
            { tex: '240 = 5 \\cdot 46 + 10,\\; 46 = 4 \\cdot 10 + 6,\\; 10 = 1 \\cdot 6 + 4,\\; 6 = 1 \\cdot 4 + 2,\\; 4 = 2 \\cdot 2', why: 'Run Euclid forwards and keep every line. The last nonzero remainder: $\\gcd = 2$.' },
            { tex: '2 = 6 - 1 \\cdot 4', why: 'Solve the second-to-last division for the gcd.' },
            { tex: '= 6 - (10 - 6) = 2 \\cdot 6 - 10', why: 'Replace $4$ using $4 = 10 - 6$, then collect the $6$s.' },
            { tex: '= 2(46 - 4 \\cdot 10) - 10 = 2 \\cdot 46 - 9 \\cdot 10', why: 'Replace $6 = 46 - 4 \\cdot 10$ and collect the $10$s.' },
            { tex: '= 2 \\cdot 46 - 9(240 - 5 \\cdot 46) = 47 \\cdot 46 - 9 \\cdot 240', why: 'Replace $10 = 240 - 5 \\cdot 46$ and collect the $46$s.' },
            { tex: '2 = (-9) \\cdot 240 + 47 \\cdot 46', why: 'Check: $-2160 + 2162 = 2$. ✓ These are exactly the coefficients the program printed.' },
          ],
          result: '$s = -9$, $t = 47$. Bézout coefficients are not unique: $(-9 + 23k,\\; 47 - 120k)$ works for every integer $k$.',
        },
        {
          type: 'table',
          headers: ['remainder $r$', 'quotient $q$', '$s$', '$t$', 'check $240s + 46t$'],
          rows: [
            ['$240$', '—', '$1$', '$0$', '$240$'],
            ['$46$', '—', '$0$', '$1$', '$46$'],
            ['$10$', '$5$', '$1$', '$-5$', '$10$'],
            ['$6$', '$4$', '$-4$', '$21$', '$6$'],
            ['$4$', '$1$', '$5$', '$-26$', '$4$'],
            ['$2$', '$1$', '$-9$', '$47$', '$2$'],
          ],
          caption: 'The forward (table) version used by `extgcd`: each new row is (row two above) $- q \\times$ (row above), applied to $r$, $s$ and $t$ alike. Every row satisfies $r = 240s + 46t$.',
        },
        {
          type: 'theorem',
          name: "Euclid's lemma",
          text: 'If $p$ is prime and $p \\mid ab$, then $p \\mid a$ or $p \\mid b$.',
        },
        {
          type: 'derivation',
          title: 'Proof using Bézout',
          steps: [
            { tex: '\\text{Suppose } p \\mid ab \\text{ and } p \\nmid a.', why: 'If $p \\mid a$ we are done, so assume not; we must show $p \\mid b$.' },
            { tex: '\\gcd(p, a) = 1', why: 'The only positive divisors of $p$ are $1$ and $p$, and $p$ does not divide $a$.' },
            { tex: '1 = sp + ta', why: 'Bézout.' },
            { tex: 'b = spb + t(ab)', why: 'Multiply both sides by $b$.' },
            { tex: 'p \\mid spb \\text{ and } p \\mid t(ab) \\implies p \\mid b', why: '$p$ divides both terms on the right (the second because $p \\mid ab$), so it divides their sum.' },
          ],
          result: 'Euclid\'s lemma gives uniqueness of prime factorization: if two factorizations of $n$ existed, a prime from one would divide the product of the other, hence (repeatedly applying the lemma) equal one of its primes; cancel and repeat.',
        },
      ],
    },
    {
      kind: 'error',
      prompt: 'A student back-substitutes to write $\\gcd(99, 78) = 3$ as a combination of $99$ and $78$. The divisions were $99 = 78 + 21$, $78 = 3 \\cdot 21 + 15$, $21 = 15 + 6$, $15 = 2 \\cdot 6 + 3$. Tap the first wrong line.',
      lines: [
        '$3 = 15 - 2 \\cdot 6$',
        '$= 15 - 2(21 - 15) = 3 \\cdot 15 - 2 \\cdot 21$',
        '$= 3(78 - 3 \\cdot 21) - 2 \\cdot 21 = 3 \\cdot 78 - 7 \\cdot 21$',
        '$= 3 \\cdot 78 - 7(99 - 78) = 10 \\cdot 78 - 7 \\cdot 99$',
      ],
      errorLines: [3],
      explanation: 'Expanding $3(78 - 3 \\cdot 21)$ gives $3 \\cdot 78 - 9 \\cdot 21$, and then $-9 \\cdot 21 - 2 \\cdot 21 = -11 \\cdot 21$, not $-7 \\cdot 21$. Correctly: $3 = 3 \\cdot 78 - 11 \\cdot 21 = 3 \\cdot 78 - 11(99 - 78) = 14 \\cdot 78 - 11 \\cdot 99$. Always check the final line: $14 \\cdot 78 - 11 \\cdot 99 = 1092 - 1089 = 3$ ✓, while the student\'s $780 - 693 = 87 \\ne 3$.',
    },
  ],
  takeaways: [
    'A prime has exactly two positive divisors; $1$ is not prime. A composite $n$ has a prime factor $\\le \\sqrt{n}$, so trial division can stop there.',
    'Fundamental theorem of arithmetic: every $n > 1$ factors into primes uniquely. $\\prod p_i^{e_i}$ has $\\prod (e_i + 1)$ divisors.',
    'The sieve of Eratosthenes crosses out multiples of each prime starting at $p^2$ and finds all primes up to $n$ in about $n \\log \\log n$ steps.',
    'There are infinitely many primes (Euclid), thinning out like $x / \\ln x$.',
    'gcd uses minimum exponents, lcm maximum exponents, and $\\gcd(a, b)\\operatorname{lcm}(a, b) = ab$.',
    'Euclidean algorithm: $\\gcd(a, b) = \\gcd(b, a \\bmod b)$; at most about $2\\log_2 a$ steps. The extended version finds $s, t$ with $sa + tb = \\gcd(a, b)$.',
  ],
  reading: [
    {
      title: 'Wikipedia — Euclidean algorithm',
      url: 'https://en.wikipedia.org/wiki/Euclidean_algorithm',
      source: 'wikipedia',
      note: 'History, the tiling picture, running-time analysis with Fibonacci numbers, and the extended version.',
    },
    {
      title: 'Wikipedia — Sieve of Eratosthenes',
      url: 'https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes',
      source: 'wikipedia',
      note: 'An animated sieve, the $n \\log \\log n$ complexity, and segmented sieves for huge ranges.',
    },
    {
      title: 'MIT 6.042J Mathematics for Computer Science',
      url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/',
      source: 'other',
      note: 'The number theory notes prove unique factorization from the gcd properties, exactly as this lesson does.',
    },
    {
      title: 'Khan Academy — Computer science',
      url: 'https://www.khanacademy.org/computing/computer-science',
      source: 'khan',
      note: 'The cryptography unit includes visual lessons on primality testing and the prime number theorem.',
    },
  ],
};
