import streamlit as st
import random

st.set_page_config(page_title="Emotion Check", layout="centered")

st.markdown(
    "<h3 style='text-align:center; font-weight:400;'>今の気持ちチェック</h3>",
    unsafe_allow_html=True
)

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

def toggle(e):
    if e in st.session_state.selected:
        st.session_state.selected.remove(e)
    else:
        st.session_state.selected.add(e)

st.subheader("今どんな感じ？（複数OK）")

# 感情ボタン（通常）
col1, col2 = st.columns(2)

for i, e in enumerate(emotions):
    if i % 2 == 0:
        with col1:
            if st.button(e, key=f"emo_{e}"):
                toggle(e)
    else:
        with col2:
            if st.button(e, key=f"emo_{e}"):
                toggle(e)

# ★ここがGOゾーン（ここに置く）
st.markdown("")

# GO専用スタイル（GOだけに効く）
st.markdown(
    """
    <style>
    div[data-testid="stButton"] button[kind="primary"] {
        border: 2px solid #333 !important;
        outline: 2px solid #999 !important;
        font-weight: 700;
    }
    </style>
    """,
    unsafe_allow_html=True
)

messages = [
    "これは今の反応。結論ではない。",
    "今の気持ちは一時的なもの。",
    "判断しなくていい時間。",
    "これは状態であって事実ではない。",
    "今は波の中にいるだけ。",
]

# ★GOはここ（今どんな感じゾーンの直下）
if st.button("GO", type="primary", key="go_button"):
    st.session_state.result = {
        "states": list(st.session_state.selected),
        "message": random.choice(messages)
    }

st.markdown("---")

# 結果表示
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
