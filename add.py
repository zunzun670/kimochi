import streamlit as st
import random

st.set_page_config(page_title="Emotion Check", layout="centered")

# タイトル（小さめ）
st.markdown(
    "<h3 style='text-align:center; font-weight:400;'>今の気持ちチェック</h3>",
    unsafe_allow_html=True
)

# 状態初期化
if "selected" not in st.session_state:
    st.session_state.selected = set()

if "result" not in st.session_state:
    st.session_state.result = None

emotions = [
    "不安",
    "寂しい",
    "イライラ",
    "もやもや",
    "疲れた",
    "なんとなく不安"
]

def toggle(emotion):
    if emotion in st.session_state.selected:
        st.session_state.selected.remove(emotion)
    else:
        st.session_state.selected.add(emotion)

st.subheader("今どんな感じ？（複数OK）")

# ボタン
col1, col2 = st.columns(2)

for i, e in enumerate(emotions):
    if i % 2 == 0:
        with col1:
            if st.button(e, key=e):
                toggle(e)
    else:
        with col2:
            if st.button(e, key=e):
                toggle(e)

# GOを「線の下」に配置
st.markdown("---")

# GOボタン強調CSS（ダブル枠風）
st.markdown(
    """
    <style>
    div.stButton > button:first-child {
        border: 2px solid #444 !important;
        outline: 2px solid #aaa !important;
        font-weight: bold;
        padding: 0.5em 1em;
    }
    </style>
    """,
    unsafe_allow_html=True
)

# GO処理
if st.button("GO"):
    messages = [
        "これは今の反応。結論ではない。",
        "今の気持ちは一時的なもの。",
        "判断しなくていい時間。",
        "これは状態であって事実ではない。",
        "今は波の中にいるだけ。",
    ]

    st.session_state.result = {
        "states": list(st.session_state.selected),
        "message": random.choice(messages)
    }

# 表示
if st.session_state.result:
    st.subheader("今の状態")

    if st.session_state.result["states"]:
        st.write(" / ".join(st.session_state.result["states"]))
    else:
        st.write("（未選択）")

    st.info(st.session_state.result["message"])

    if st.button("リセット"):
        st.session_state.selected = set()
        st.session_state.result = None
